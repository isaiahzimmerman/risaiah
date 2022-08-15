var Xmin = 0;
var Xmax = 0;
var Ymin = 0;
var Ymax = 0;

var xyValues = [
    {x:50, y:7},
    {x:60, y:8},
    {x:70, y:8},
    {x:80, y:9},
    {x:90, y:9},
    {x:100, y:9},
    {x:110, y:10},
    {x:120, y:11},
    {x:130, y:14},
    {x:140, y:14},
    {x:150, y:15}
];

var linRegValues = []

function linReg(dataSet){
    var sumX = 0
    var sumY = 0
    
    dataSet.forEach(function(currentValue){
        sumX += currentValue.x
        sumY += currentValue.y
    })

    var avgX = (sumX/dataSet.length)
    var avgY = (sumY/dataSet.length)

    var SSxx = 0
    var SSxy = 0
    dataSet.forEach(function(currentValue){
        SSxx += Math.pow((avgX - currentValue.x), 2)
        SSxy += ((avgX - currentValue.x)*(avgY - currentValue.y))
    })

    var slope = (SSxy/SSxx).toPrecision(4)
    var yIntercept = (avgY - slope * avgX).toPrecision(4)

    return[slope, yIntercept]

}

function generateData(slope, yIntercept, xMin, xMax, step) {
    console.log([slope, yIntercept, xMin, xMax, step])
    linRegValues = []
    for (let xVal = xMin; xVal <= xMax; xVal += step){
        console.log(xVal+" "+(slope * xVal + yIntercept))
        linRegValues.push({x: xVal, y: (slope * xVal + yIntercept)})
    }
    
    console.log("aorking")
}

function loadChart(){
    //refresh the chart size
    Xmin = 0;
    Xmax = 0;
    Ymin = 0;
    Ymax = 0;

    if(xyValues!={}){
        xyValues.forEach(function(currentValue, index){
            console.log(index)
            if(index==0){
                Xmin=currentValue.x
                Xmax=currentValue.x
                Ymax=currentValue.y
                Ymin=currentValue.y

                console.log(Xmin+" "+Xmax+" "+Ymin+" "+Ymax)
            }else{
                if(currentValue.x < Xmin){
                    Xmin = currentValue.x
                }else if(currentValue.x > Xmax){
                    Xmax = currentValue.x
                }

                if(currentValue.y < Ymin){
                    Ymin = currentValue.y
                }else if(currentValue.y > Ymax){
                    Ymax = currentValue.y
                }
                console.log(Xmin+" "+Xmax+" "+Ymin+" "+Ymax)
            }
        })
    }

    Xmin=Xmin-1
    Xmax=parseFloat(Xmax, 10)+1
    Ymin=Ymin-1
    Ymax=Ymax+1

    console.log(Xmin+" "+Xmax+" "+Ymin+" "+Ymax)
    
    new Chart("myChart", {
        type: "scatter",
        data: {
          datasets: [{
            pointRadius: 4,
            pointBackgroundColor: "rgb(0,0,255)",
            data: xyValues
          },
          {
            pointRadius: 4,
            pointBackgroundColor: "red",
            data: linRegValues
          }
        ]
        },
        options: {
          legend: {display: false},
          scales: {
            xAxes: [{ticks: {min: Xmin, max: Xmax}}],
            yAxes: [{ticks: {min: Ymin, max: Ymax}}],
          }
        }
    });
}

function refreshData(){
    var dataBody = ""

    if(xyValues!={}){
        xyValues.forEach(function(currentValue, index){
            console.log("x="+currentValue.x+", y="+currentValue.y+", "+index)
            dataBody+=`
                <div id="chartData`+index+`">
                    <span>x = `+currentValue.x+`</span>
                    <span>y = `+currentValue.y+`</span>
                    <button onclick="deleteDataPoint(`+index+`)">delete</button>
                </div>`
        })
    }

    document.getElementById("chartData").innerHTML = dataBody
}

function deleteDataPoint(index){
    xyValues.splice(index, 1)
    loadChart()
    refreshData()
}

function addData(newX, newY){
    console.log(newX+" is x and y is "+newY)
    if(!isNaN(newX) && !isNaN(newY)){
        xyValues.push({x: newX, y: newY})
    }
    loadChart()
    refreshData()
}

function calculateResults(dataSet){
    if(dataSet.length < 2){
        document.getElementById("results").innerHTML = "too short, need more values"
    }else{
        output = linReg(dataSet)
        document.getElementById("results").innerHTML = "y = "+output[0]+"x + "+output[1]
        return output
    }
}

function graphResults(){
    answer = calculateResults(xyValues)
    generateData(parseFloat(output[0], 10), parseFloat(output[1], 10), Xmin, Xmax, 5)
    loadChart()
}