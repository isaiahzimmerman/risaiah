function shuffle(array, seed) {                // <-- ADDED ARGUMENT
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(random(seed) * m--);        // <-- MODIFIED LINE
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
      ++seed                                     // <-- ADDED LINE
    }
  
    return array;
}

function random(seed) {
var x = Math.sin(seed++) * 10000; 
return x - Math.floor(x);
}

function setCookie(){
    if(document.cookie == ""){
        names=[
            'Isaiah',
            'Renee',
            'Ryan',
            'Lauren',
            'Zion',
            'David',
            'Chase',
            'Anthony',
            'Hannah',
            'Caleb',
            'Eli',
            'Sarah',
        ]
    }else{
        console.log(eval(document.cookie))
        eval(document.cookie)
    }
}

function refreshCookie(){
    cookieAdd = "names=["
    names.forEach(function(element){
        cookieAdd+=("'"+element+"',")
    })
    cookieAdd+="]; SameSite=Strict; path=/companero/; expires=Fri, 31 Dec 2500"
    document.cookie = cookieAdd
}

function drawSite(){
    docAdd = ""
    names.forEach(function(element,index){
        docAdd += `<div>`+element+`<button onclick='removeName(`+index+`)'>remove</button>Absent?<input type='checkbox' id='absent`+index+`'></div>`
    })
    document.getElementById('namesList').innerHTML = docAdd
}

function addName(input){
    names.push(input)
    refreshCookie()
    drawSite()
}

function removeName(index){
    names.splice(index, 1)
    refreshCookie()
    drawSite()
}

function nameButton(){
    if(document.getElementById('newName').value != ''){
        addName(document.getElementById('newName').value)
        document.getElementById('newName').value=''
    }
}

function generateGroups(){
    namesList = []
    names.forEach(function(element, index){
        if(!document.getElementById('absent'+index).checked){
            namesList.push(element)
        }
    })
    var today = new Date()
    namesList = shuffle(namesList, today.getDate())
    //shuffled = ''
    size = parseInt((document.getElementById('groupSize').value), 10)
    if(isNaN(size)){
        size=2
    }
    extra = namesList.length%size
    numGroups = Math.floor(namesList.length/size)
    namesList.forEach(function(element){
        
    })
    groupsList=[]
    for(i=0; i<numGroups; i++){
        z = 0
        if(extra/(numGroups-i)>1){
            z = Math.ceil(extra/(numGroups-i))
            extra -= Math.ceil(extra/(numGroups-i))
        }else if(extra>0){
            z = 1
            extra--
        }
        groupsList.push(namesList.splice(0, size+z))
    }

    nameDoc = ''
    groupsList.forEach(function(element, index){
        addItem = 'Group '+(index+1)+': '
        element.forEach(function(element2, index2){
            addItem+=element2
            if(element.length>index2+2){
                addItem+=", "
            }else if(element.length>index2+1){
                addItem+=' and '
            }else{
                addItem+="."
            }
        })
        nameDoc+=`<div>`+addItem+`</div>`
    })
    document.getElementById('groups').innerHTML = nameDoc
}