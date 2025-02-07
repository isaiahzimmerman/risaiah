function checkImageTransparency (image) {
    return new Promise((resolve, reject) => {
        if (!image?.attributes?.src?.textContent) {
            return reject("Invalid image source.");
        }

        const imageObj = new Image();
        imageObj.src = image.attributes.src.textContent;
        imageObj.crossOrigin = "Anonymous"; // Avoid CORS issues for external images

        imageObj.onload = () => {
            // Create a canvas
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            if (!ctx) return reject("Canvas not supported.");

            // Set canvas size to match the image
            canvas.width = imageObj.width;
            canvas.height = imageObj.height;

            // Draw the image on the canvas
            ctx.drawImage(imageObj, 0, 0);

            // Get pixel data from the canvas
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const pixels = imageData.data; // A flat array [R, G, B, A, R, G, B, A, ...]

            // Count transparent pixels
            let transparentPixels = 0;
            const totalPixels = pixels.length / 4; // Each pixel has 4 values (RGBA)

            for (let i = 3; i < pixels.length; i += 4) {
                if (pixels[i] === 0) {
                    transparentPixels++;
                }
            }

            // Calculate the percentage of transparent pixels
            resolve(((transparentPixels / totalPixels) * 100).toFixed(2));
        };

        imageObj.onerror = () => reject("Error loading image.");
    });
};

document.addEventListener("DOMContentLoaded", function(){
    //this is good for preloading images
    const joe = document.createElement("img")
    joe.src = "images/ulysses.jpg"

    artworkAttributes.forEach(element => {
        document.getElementById('artwork_attributes_container').innerHTML += `<div class="reveal_container"><button class="reveal_button" onclick="writeAttributeFromCurrent('${element}')">reveal ${element}</button><span>${element}: <span id="${element}"></span></span></div>`
    });
    
    newWork()
})

function getTransparency(imageSrc){
    const imgElement = document.createElement("img");
    imgElement.src = imageSrc;
    checkImageTransparency(imgElement)
        .then(percentage => console.log(`Transparent Pixels: ${percentage}%`))
        .catch(error => console.error(error));
}

const Orientation = {
    LANDSCAPE: 0,
    PORTRAIT: 1
}

function generateZoomedImage(imageSrc, imgZoomLevel){
    const imgElement = document.createElement("img");
    imgElement.src = imageSrc;
    imgElement.onload = function(){
        console.log("loaded")
        let orientation = Orientation.LANDSCAPE;
        if(imgElement.width < imgElement.height){
            orientation = Orientation.PORTRAIT
        }

        imgZoomLevel = imgZoomLevel ? imgZoomLevel : 10
        let imgSize;
        if(orientation = Orientation.LANDSCAPE){
            imgSize = imgElement.height / imgZoomLevel;
        }else{
            imgSize = imgElement.width / imgZoomLevel;
        }

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        if (!ctx) return console.error("Canvas not supported.");

        // Set canvas size to match the image
        canvas.width = imgSize;
        canvas.height = imgSize;

        // Draw the image on the canvas
        maxWidth = imgElement.width - imgSize
        maxHeight = imgElement.height - imgSize
        
        xPos = -Math.floor(Math.random() * maxWidth)
        yPos = -Math.floor(Math.random() * maxHeight)

        ctx.drawImage(imgElement, xPos, yPos);
        document.getElementById("image_container").replaceChildren(canvas)
    }
}

function showFullImage(){
    document.getElementById("full_image").src = `images/${currentWork.srcs[0]}`
    document.getElementById("full_image").style.display = "flex"
}

function hideFullImage(){
    document.getElementById("full_image").style.display = "none"
    document.getElementById("full_image").src = ""
}

function newWork(){
    artworkAttributes.forEach(element => {
        clearAttributeFromCurrent(element)
    });
    hideFullImage()

    currentWork = artworks[Math.floor(Math.random() * artworks.length)]
    generateZoomedImage(`images/${currentWork.srcs[0]}`)
}

function rezoomImage(imgZoomLevel){
    generateZoomedImage(`images/${currentWork.srcs[0]}`, imgZoomLevel)
}

function writeAttributeFromCurrent(id){
    if(currentWork[id]){
        document.getElementById(id).innerText = currentWork[id]
    }else{
        document.getElementById(id).innerText = "none found"
    }
}

function clearAttributeFromCurrent(id){
    document.getElementById(id).innerText = ""
}

let currIndex
let currentWork

const artworkAttributes = ['title', 'artist', 'dimensions', 'year', 'era', 'medium']