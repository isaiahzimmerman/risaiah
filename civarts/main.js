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

const songPlaytime = 10

let musicAndArt = []

let tagsChecked = []

function updateTagsChecked(){
    tagsChecked = []

    for(const tag in tags){
        if(document.getElementById(tag) && document.getElementById(tag).checked){
            tagsChecked.push(tags[tag])
        }
    }
}

function checkOverlap(arr1, arr2){
    for(const element of arr1){
        if(arr2.includes(element)){
            return true
        }
    }

    return false
}

function arrayIntersection(arr1, arr2){
    let out = []

    for(const item of arr1){
        if(!out.includes(item) && arr2.includes(item)){
            out.push(item)
        }
    }

    return out
}

function filterWithTags(element){
    for(tagCategory of tagStructure){
        const checkedInCategory = arrayIntersection(tagCategory, tagsChecked)

        if(checkedInCategory.length >= 1){
            if(!checkOverlap(checkedInCategory, element.tags)){
                return false
            }
        }
    }

    return true
}

function mulberry32(a) {
    let t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}

function shuffle(array, seed) {                // <-- ADDED ARGUMENT
    var m = array.length, t, i;
    // seed *= 10
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(mulberry32(((seed/365)*2**32)>>>0) * m--);        // <-- MODIFIED LINE
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
      ++seed                                     // <-- ADDED LINE
    }
  
    return array;
}

function refreshMusicAndArt(){
    updateTagsChecked()

    musicAndArt = []

    artworks.forEach(function(element){
        element.type = "artwork"
        if(element.tags){
            if(!element.tags.includes(tags.ARTWORK)){
                element.tags.push(tags.ARTWORK)
            }
        }else{
            element.tags = [tags.ARTWORK]
        }

        if(filterWithTags(element)){
            musicAndArt.push(element)
        }
    })

    music.forEach(function(element){
        element.type = "music"
        element.timeline = "yes"
        if(element.tags){
            if(!element.tags.includes(tags.MUSIC))
                element.tags.push(tags.MUSIC)
        }else{
            element.tags = [tags.MUSIC]
        }

        // console.log(element)

        if(filterWithTags(element)){
            musicAndArt.push(element)
        }
    })

    shuffle(musicAndArt, Math.random()*100)

    newWork()
}

document.addEventListener("DOMContentLoaded", function(){
    //this is good for preloading images
    // const joe = document.createElement("img")
    // joe.src = "images/ulysses.jpg"

    createFilters()

    refreshMusicAndArt()

    hideLoading()

    const timeline = document.getElementById("music_timeline");

    timeline.addEventListener('mousemove', function (e) {
        const rectBounds = canvas.getBoundingClientRect();
        const x = e.clientX - rectBounds.left;
        const y = e.clientY - rectBounds.top;
    
        if (
            x >= rect.x && x <= rect.x + rect.width &&
            y >= rect.y && y <= rect.y + rect.height
        ) {
            canvas.style.cursor = 'pointer';
            console.log('Hovering over rectangle!');
        } else {
            canvas.style.cursor = 'default';
        }
    });

    document.getElementById("full_image_container").addEventListener("click", fullscreenImage)
    document.getElementById("fullscreen_image_container").addEventListener("click", hideFullscreenImage)
})

function fullscreenImage(){
    document.getElementById("fullscreen_image").src = `./images/${currentWork.srcs[0]}`
    document.getElementById("fullscreen_image_container").style.display = "flex"
}

function hideFullscreenImage(){
    document.getElementById("fullscreen_image_container").style.display = "none"
}

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

function showLoading(){
    document.getElementById("loading").style.display = "block"
}

function hideLoading(){
    document.getElementById("loading").style.display = "none"
}

function generateZoomedImage(imageSrc, imgZoomLevel){
    const imgElement = document.createElement("img");
    imgElement.src = imageSrc;
    showLoading()
    imgElement.onload = function(){
        console.log("loaded")
        let orientation = Orientation.LANDSCAPE;
        if(imgElement.width < imgElement.height){
            orientation = Orientation.PORTRAIT
        }

        imgZoomLevel = imgZoomLevel ? imgZoomLevel : 10
        let imgSize;
        if(orientation == Orientation.LANDSCAPE){
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

        hideLoading()
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

function showImageComponents(){
    document.getElementById("artwork_buttons").style.display = "inline"
    document.getElementById("images_container").style.display = "flex"
}

function hideImageComponents(){
    document.getElementById("artwork_buttons").style.display = "none"
    document.getElementById("images_container").style.display = "none"
}

function showMusicComponents(){
    document.getElementById("music_buttons").style.display = "inline"
}

function hideMusicComponents(){
    document.getElementById("music_buttons").style.display = "none"
}

let currentWorkIndex = 0

function newWork(){
    hideFullImage()
    clearMusicTimeline()
    Howler.stop()

    currentWork = musicAndArt[(currentWorkIndex++)%musicAndArt.length]

    document.getElementById('artwork_attributes_container').innerHTML = ""

    artworkAttributes.forEach(element => {
        if(currentWork[element]){
            document.getElementById('artwork_attributes_container').innerHTML += `<div class="reveal_container"><button class="reveal_button" onclick="writeAttributeFromCurrent('${element}')">reveal ${element}</button><span>${element}: <span id="${element}"></span></span></div>`
        }
    });

    // console.log(currentWork, currentWork.type)

    if(currentWork.type == "artwork"){
        hideMusicComponents()
        showImageComponents()
        generateZoomedImage(`images/${currentWork.srcs[0]}`)
    }else{
        hideImageComponents()
        showMusicComponents()
        currentWork.startTime = null

        playMusic()
    }
}

function createFilters(){
    const filtersDiv = document.getElementById('filters')

    for(tagCategory of tagStructure){
        const categoryDiv = document.createElement("div")
        for(tag of tagCategory){
            const tagContainer = document.createElement('span')
    
            const tagName = document.createElement('span')
            tagName.innerText = tag
    
            const tagCheckbox = document.createElement('input')
            tagCheckbox.id = tagsInverse[tag]
            tagCheckbox.type = 'checkbox'
            tagCheckbox.addEventListener('change', refreshMusicAndArt)
    
            tagContainer.appendChild(tagName)
            tagContainer.appendChild(tagCheckbox)
    
            categoryDiv.appendChild(tagContainer)
        };
        filtersDiv.appendChild(categoryDiv)
    }
}

function clearMusicTimeline(){
    const canvas = document.getElementById("music_timeline");
    canvas.style.display = 'none'

    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function getTime(seconds){
    return `${Math.floor(seconds / 60)}:${Math.round(seconds % 60).toString().padStart(2, '0')}`
}

function drawMusicTimeline(){
    clearMusicTimeline()

    const canvas = document.getElementById("music_timeline");
    canvas.style.display = 'block'

    const ctx = canvas.getContext("2d");

    const rectLength = (songPlaytime / currentWork.songLength) * 480
    const rectStart = (currentWork.startTime / currentWork.songLength) * 480

    ctx.beginPath();
    ctx.moveTo(10, 25);
    ctx.lineTo(490, 25);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(10, 15);
    ctx.lineTo(10, 35);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(490, 15);
    ctx.lineTo(490, 35);
    ctx.stroke();

    // Set font properties
    ctx.font = "15px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(getTime(currentWork.startTime), rectStart, 50); // (text, x, y)

    ctx.fillStyle = "red"; // Fill color
    ctx.fillRect(rectStart, 20, rectLength, 10); // (x, y, width, height)
}

function rezoomImage(imgZoomLevel){
    generateZoomedImage(`images/${currentWork.srcs[0]}`, imgZoomLevel)
}

function writeAttributeFromCurrent(id){
    if(currentWork[id]){
        if(id=='timeline'){
            drawMusicTimeline()
        }else{
            document.getElementById(id).innerText = currentWork[id]
        }
    }else{
        document.getElementById(id).innerText = "none found"
    }
}

function clearAttributeFromCurrent(id){
    document.getElementById(id).innerText = ""
}

let currentSound = null;

async function playMusic(){
    Howler.stop()
    showLoading()

    if (currentSound) {
        currentSound.stop();
        currentSound.unload(); // Clear from memory
        currentSound = null;
    }

    const sound = new Howl({
        src: [`music/${currentWork.src}`],
        html5: true, // Ensure smooth playback on mobile
    });

    currentSound = sound

    await new Promise((resolve) => {
        sound.once('load', resolve);
    });

    const duration = songPlaytime

    const songLength = sound.duration()
    currentWork.songLength = songLength

    if(!currentWork.startTime){
        currentWork.startTime = Math.random() * (songLength - duration)
    }
  
    // Function to play audio from startTime to endTime
    sound.seek(currentWork.startTime); // Jump to startTime
    sound.play();

    hideLoading()
  
    // Stop playback after (endTime - startTime) milliseconds
    setTimeout(() => {
      sound.pause();
    }, (duration) * 1000);
}

let currIndex
let currentWork

const artworkAttributes = ['title', 'artist', 'dimensions', 'year', 'era', 'medium', 'location', "work", "movement",  'act', 'scene',"timeline",]