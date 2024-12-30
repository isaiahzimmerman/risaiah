let clickableAreas = [
]

function createClickableAreas(length){
    let center = c.getCenter()
    let topLeft = c.getPointFromCenter(length, 210)
    let topRight = c.getPointFromCenter(length, 330)
    let bottom = c.getPointFromCenter(length, 90)
    let bottomLeft = {x: topLeft.x, y: topLeft.y + length}
    let bottomRight = {x: topRight.x, y: topRight.y + length}
    let top = c.getPointFromAngle(topLeft, 330, length)

    clickableAreas.push([center, topLeft, top, topRight])
    clickableAreas.push([center, topRight, bottomRight, bottom])
    clickableAreas.push([center, bottom, bottomLeft, topLeft])
}

function isInsidePolygon(mouseX, mouseY, area){
    //determine if point is within
}

document.addEventListener("DOMContentLoaded", function(){
    createCanvas()
    createClickableAreas(SIZE)
    c.canvas.addEventListener("click", (event) => {
        // Get mouse position relative to the canvas
        const rect = c.canvas.getBoundingClientRect();
        const mouseX = (event.clientX - rect.left) * (c.canvas.width / rect.width);
        const mouseY = (event.clientY - rect.top) * (c.canvas.height / rect.height);
    
        // console.log(mouseX, mouseY)
        // clickableAreas.forEach((area) => {
        //     // if (isInsidePolygon(mouseX, mouseY, area)) {
        //     //     console.log(`Clicked on: ${area.id}`);
        //     //     handleClick(area.id);
        //     // }
        // });

        if(mouseX > 640 && mouseX < 800 && mouseY > 500 && mouseY < 750){
            rotateFace(faceLayout.right)
        }else if(mouseX > 350 && mouseX < 650 && mouseY > 170 && mouseY < 330){
            rotateFace(faceLayout.top)
        }else if(mouseX > 210 && mouseX < 360 && mouseY > 500 && mouseY < 750){
            rotateFace(faceLayout.left)
        }
    });
    drawCube(SIZE)
})

function degreesToRadians(degrees){
    return ((degrees * Math.PI) / 180)
}

function radiansToDegrees(radians){
    return ((radians * 180) / Math.PI)
}

let c = {
    canvas: null,
    ctx: null,
    getCenter: function(){
        return {x: this.canvas.width / 2, y: this.canvas.height/2}
    },
    drawLine: function(fromPoint, toPoint){
        this.ctx.beginPath()
        this.ctx.moveTo(fromPoint.x, fromPoint.y);
        this.ctx.lineTo(toPoint.x, toPoint.y);
        this.ctx.stroke();
    },
    getPointFromCenter: function(length, angle){
        let center = this.getCenter()
        return {
            x: center.x + length * Math.cos(degreesToRadians(angle)),
            y: center.y + length * Math.sin(degreesToRadians(angle)),
        }
    },
    getPointFromAngle: function(point, angle, length){
        return {
            x: point.x + length * Math.cos(degreesToRadians(angle)),
            y: point.y + length * Math.sin(degreesToRadians(angle)),
        }
    },
    drawLineFromCenter: function(length, angle){
        let center = this.getCenter()
        this.drawLine(
            center, 
            this.getPointFromCenter(length, angle)
        )
    },
    drawFace: function(corner1, corner2, corner3, corner4, color){
        // console.log(corner1, corner2, corner3, corner4)
        this.ctx.fillStyle = color;
        this.ctx.strokeStyle = "#000000"
        this.ctx.beginPath();
        this.ctx.moveTo(corner1.x, corner1.y);
        this.ctx.lineTo(corner2.x, corner2.y);
        this.ctx.lineTo(corner3.x, corner3.y);
        this.ctx.lineTo(corner4.x, corner4.y);
        this.ctx.lineTo(corner1.x, corner1.y);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();
    },
    clear: function(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    biforcateLine: function(start, end, pieces){
        let output = []
        let horizontalDistance = (end.x - start.x) / pieces
        let verticalDistance = (end.y - start.y) / pieces
        for(let i = 0; i < pieces; i++){
            output.push({
                x: start.x + horizontalDistance * i,
                y: start.y + verticalDistance * i,
            })
        }
        return output
    },
    drawFacesGrid: function(corner1, corner2, corner3, corner4, numDivisions){
        let output = []
        
    }
}

const SIZE = 500

function generateGrid(v0, v1, v2, v3, rows, cols) {
    const grid = [];

    for (let i = 0; i <= rows; i++) {
        const row = [];
        const v = i / rows;

        for (let j = 0; j <= cols; j++) {
            const u = j / cols;

            const x = (1 - u) * (1 - v) * v0.x + u * (1 - v) * v1.x + u * v * v2.x + (1 - u) * v * v3.x;
            const y = (1 - u) * (1 - v) * v0.y + u * (1 - v) * v1.y + u * v * v2.y + (1 - u) * v * v3.y;

            row.push({ x, y });
        }

        grid.push(row);
    }

    return grid;
}

let faceLayout = {top: "blue", left: "white", right: "red"}

function rotateFace(color){
    let leftFace = cube[cube[color].adjacent.left].face
    let oldLeftStrip = [leftFace[0][0], leftFace[0][1], leftFace[0][2]]

    let bottomFace = cube[cube[color].adjacent.bottom].face
    leftFace[0][0] = bottomFace[2][2]
    leftFace[0][1] = bottomFace[2][1]
    leftFace[0][2] = bottomFace[2][0]

    let rightFace = cube[cube[color].adjacent.right].face
    bottomFace[2][2] = rightFace[0][2]
    bottomFace[2][1] = rightFace[1][2]
    bottomFace[2][0] = rightFace[2][2]

    let topFace = cube[cube[color].adjacent.top].face
    rightFace[0][2] = topFace[2][0]
    rightFace[1][2] = topFace[1][0]
    rightFace[2][2] = topFace[0][0]

    topFace[2][0] = oldLeftStrip[0]
    topFace[1][0] = oldLeftStrip[1]
    topFace[0][0] = oldLeftStrip[2]

    let currentFace = cube[color].face
    let oldTopRow = [currentFace[0][0], currentFace[0][1], currentFace[0][2]]
    currentFace[0][2] = currentFace[0][0]
    currentFace[0][1] = currentFace[1][0]
    currentFace[0][0] = currentFace[2][0]

    currentFace[1][0] = currentFace[2][1]

    currentFace[2][0] = currentFace[2][2]
    currentFace[2][1] = currentFace[1][2]
    currentFace[2][2] = currentFace[0][2]

    currentFace[2][2] = oldTopRow[2]
    currentFace[1][2] = oldTopRow[1]
    currentFace[0][2] = oldTopRow[0]

    drawCube(SIZE)
}

function rotateCube(){
    if (faceLayout.top == "blue"){
        faceLayout = {top: "green", left: "orange", right: "yellow"}
    }else{
        faceLayout = {top: "blue", left: "white", right: "red"}
    }
    drawCube(SIZE)
}

function drawFacesGrid(v0, v1, v2, v3, rows, cols, side){
    let grid = generateGrid(v0, v1, v2, v3, rows, cols)
    for(let i = 0; i<rows; i++){
        for(let j = 0; j<cols; j++){
            c.drawFace(
                grid[i][j],
                grid[i][j+1],
                grid[i+1][j+1],
                grid[i+1][j],
                // "red"
                cube[side].face[i][j]
            )
        }
    }
}


function createCanvas(){
    c.canvas = document.getElementById("cube_canvas")
    c.ctx = c.canvas.getContext("2d")
}

function drawCube(length){
    let center = c.getCenter()
    let topLeft = c.getPointFromCenter(length, 210)
    let topRight = c.getPointFromCenter(length, 330)
    let bottom = c.getPointFromCenter(length, 90)
    let bottomLeft = {x: topLeft.x, y: topLeft.y + length}
    let bottomRight = {x: topRight.x, y: topRight.y + length}
    let top = c.getPointFromAngle(topLeft, 330, length)

    c.clear()

    drawFacesGrid(center, topLeft, top, topRight, 3, 3, faceLayout.top)
    drawFacesGrid(center, topRight, bottomRight, bottom, 3, 3, faceLayout.right)
    drawFacesGrid(center, bottom, bottomLeft, topLeft, 3, 3, faceLayout.left)
}