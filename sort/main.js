unsorted = {
    content: [],
    heightFactor: null
}

function createAndShuffleArray(){
    numE = parseInt(document.getElementById("elementsToSort").value)
    if(isNaN(numE) || numE < 1)
        numE = 100
    unsorted.content = []
    for(i=1; i<=numE; i++){
        unsorted.content.push(i)
    }
    shuffle(unsorted.content)
}

function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

let timing = false

async function time(){
    timing = true
    startTime = new Date().getTime()
    while(timing){
        await wait(50)
        timeSince = (new Date().getTime() - startTime)/1000
        let timeDisp = ""
        let hrs = Math.floor(timeSince / 3600)
        if(hrs>0){timeDisp += `${hrs}h `}
        let mins = Math.floor(timeSince / 60) % 60
        if(hrs>0 || mins>0){timeDisp += `${mins}m `}
        let secs = (timeSince % 60).toFixed(2)
        timeDisp += `${secs}s `
        document.getElementById("timer").innerHTML = timeDisp
    }   
}

function copyArray(input){
    output = []
    input.forEach(element => {
        output.push(element)
    })
    return output
}

function drawArrayStatus(array){
    graph = document.getElementById("graph_display")
    array.heightFactor = 1/Math.max(...array.content)
    graph.innerHTML = ""
    array.content.forEach(function (element, i){
        newBar = document.createElement("div")
        newBar.classList.add("graph_bar")
        newBar.id = `bar${i}`
        newBar.style.height = `${(element * array.heightFactor * 100)}%`
        graph.appendChild(newBar)
    });
}

function swap(array, index1, index2){
    temp = array[index2]
    array[index2] = array[index1]
    array[index1] = temp
}

function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms || 1000))
}

function updateHeight(array, pos){
    document.getElementById(`bar${pos}`).style.height = `${(array.content[pos] * array.heightFactor * 100)}%`
}

let sorting = false;

function randInt(ceiling){
    return Math.floor(Math.random() * ceiling)
}

async function bogoSort(array){
    sorting=true
    copy = {
        content: copyArray(array.content),
        heightFactor: array.heightFactor
    }

    drawArrayStatus(copy)
    let size = copy.content.length
    while(true){
        await swapAndDraw(copy, randInt(size), randInt(size))
        if(await checkArrayAscending(copy.content)){
            break
        }
        if(!sorting){break}
    }
    sorting = false
    timing = false
}

async function checkArrayAscending(array){
    let current = array[0]
    for(let i=0; i<array.length; i++){
        if(array[i] < current){
            return false
        }
        current = array[i]
    }
    return true
}

async function bubbleSort(array){
    sorting=true
    copy = {
        content: copyArray(array.content),
        heightFactor: array.heightFactor
    }

    drawArrayStatus(copy)
    size = copy.content.length
    for(i=0; i<size-1; i++){
        for(j=0; j<size-i-1; j++){
            if(copy.content[j] > copy.content[j+1]){
                swap(copy.content, j, j+1)
                await wait(1)
            }
            updateHeight(copy, j)
            updateHeight(copy, j+1)
            if(!sorting){return}
        }
        // console.log(copy)
    }
    sorting = false
    timing = false
}

async function swapAndDraw(input, index1, index2){
    await wait(1)
    swap(input.content, index1, index2)
    updateHeight(input, index1)
    updateHeight(input, index2)
}

async function quickSort(input){
    sorting = true
    drawArrayStatus(input)
    await quickSortHelper(input, 0, input.content.length-1)
    sorting = false
    timing = false
}

async function quickSortHelper(input, index1, index2){
    let array = input.content
    let indexP = Math.floor(index1 + (index2-index1)/2)
    if(index1 >= index2){ return }

    //accurately positions pivot, first, and last
    if(array[index1] > array[indexP]){ if(!sorting){return}; await swapAndDraw(input, index1, indexP) }
    if(array[indexP] > array[index2]){ if(!sorting){return}; await swapAndDraw(input, indexP, index2) }
    if(array[index1] > array[indexP]){ if(!sorting){return}; await swapAndDraw(input, index1, indexP) }

    //move pivot to end
    if(!sorting){return}; await swapAndDraw(input, indexP, index2)

    let firstFromLeft = index1;
    let firstFromRight = index2-1;
    while(true){
        while(array[firstFromLeft] < array[index2] && firstFromLeft <= index2-1){
            firstFromLeft++
        }
        
        while(array[firstFromRight] > array[index2] && firstFromRight >= index1){
            firstFromRight--
        }

        if(firstFromRight < firstFromLeft){ break }
        
        if(!sorting){return}; await swapAndDraw(input, firstFromLeft, firstFromRight)
    }
    if(!sorting){return}; await swapAndDraw(input, firstFromLeft, index2)

    await quickSortHelper(input, index1, firstFromLeft-1)
    await quickSortHelper(input, firstFromLeft+1, index2)
}

function runQS(){
    if(!sorting){
        createAndShuffleArray()
        time()
        quickSort(unsorted)
    }
}

function sortUsing(type){
    switch(type){
        case "bubble":
            bubbleSort(unsorted)
            break
        case "quick":
            quickSort(unsorted)
            break
        case "bogo":
            bogoSort(unsorted)
            break
    }
}

function startSort(){
    if(!sorting){
        createAndShuffleArray()
        time()
        sortType = document.getElementById("sorting_method").value
        sortUsing(sortType)
    }
}

function stopSort(){
    timing = false
    sorting = false
}

window.addEventListener("resize", function(){
    this.document.getElementById("graph_display").style.height = `${window.innerHeight - document.getElementById("options").getBoundingClientRect().bottom - 10}px`
})

window.addEventListener("load", function(){
    window.dispatchEvent(new Event('resize'));
})