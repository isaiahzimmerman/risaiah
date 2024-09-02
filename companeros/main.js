avgDeviation = 0
mapLen = 0
test = 0

function testShuffling(){
    g = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    var result = g.flatMap(
        (v, i) => g.slice(i+1).map( w => v + ' ' + w )
    );

    mapLen = result.length

    mappy = new Map()

    result.forEach(element => {
        mappy.set(element, 0)
    });

    for(i=1; i<365; i++){
        g = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        shuffle(g, i)
        shuffle(g, random(i))
        shuffle(g, random(i*2))
        shuffle(g, i)
        for(j=0; j<g.length; j+=2){
            val1 = Math.min(g[j], g[j+1])
            val2 = Math.max(g[j], g[j+1])
            mappy.set(`${val1} ${val2}`, mappy.get(`${val1} ${val2}`)+1)
        }
    }

    for (const [key, value] of mappy) { // Using the default iterator (could be `map.entries()` instead)
        avgDeviation += Math.abs(value-364/15)/(364/15)
    }
    console.log(avgDeviation/mapLen)
}

//stolen

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

function random(seed) {
    var x = Math.sin(seed++) * 100000; 
    return x - Math.floor(x);
}

//stolen https://stackoverflow.com/questions/16801687/javascript-random-ordering-with-seed Ulf Aslak

/*
function setCookie(){
    if(document.cookie == ""){
        names=[
            'Anthony',
            'Brian',
            'Caleb',
            'Chase',
            'David',
            'Eli',
            'Hannah',
            'Isaiah',
            'Lauren',
            'Renee',
            'Ryan',
            'Sarah',
            'Zion',
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
*/

names=[
    {
        title: "Spanish III (2nd)",
        namesList: [
            'River',
            'Lydia',
            'Mason',
            'Noah',
            'Brett',
            'Emma',
            'Ethan',
            'Parker',
            'Kendall',
            'Hope',
            'Allison',
            'Mimi',
            'Maris',
            'Annika',
            'Annalyse',
            'Sara',
            'Dylan',
            'Hannah',
            'Leah',
            'Nina',
            'Jake',
        ]
    },
    {
        title: "Spanish III (5th)",
        namesList: [
            'Kiera',
            'Liam',
            'McKenna',
            'Kye',
            'Kendra',
            'Wyatt',
            'Brady',
            'Violet',
            'Alex',
            'Eli',
            'Owen',
            'Nina',
            'Noah',
            'Maggie',
            'Vince',
            'Laura',
        ]
    },
    {
        title: "Spanish IV",
        namesList: [
            'Grace',
            'Lanie',
            'Ainsley',
            'Lila',
            'Mia',
            'Hope',
            'Hailey',
            'Mackenzie',
            'Kelsey',
            'Allison',
            'Kaylee',
            'Sam',
            'Bridget',
            'Ayden',
            'Josh',
            'Lauren',
            'Matayo',
            'Anthony',
        ]
    },
    {
        title: "CHS",
        namesList: [
            'Jackson',
            'Andrew',
            'Emily',
            'Nic',
            'Ella',
            'Dylan',
            'Alexis',
            'Natalie',
            'Davis',
            'Tim',
            'Jacob',
            'Marty',
            'Pearl',
            'Leah',
            'Amelia',
            'Bea',
            'Nathan',
            'Eli',
            'James'
        ]
    },
]

currentSite = 0;

function setSite(val){
    currentSite = val
    for(i = 0; i<names.length; i++){
        document.getElementById('hider'+i).hidden = !(i==val)
    }
}

function drawSite(){
    names.forEach(function(e1, i1){
        docAdd = ""
        e1.namesList.forEach(function(e2,i2){
            docAdd += `
            <div class="student">
                <div class="studentName textItem">`+e2+`</div>
                <button class="textItem" onclick='removeName(`+i2+`)'>Remove</button>
                <div class="textItem isAbsent">Absent?</div>
                <input type='checkbox' class='checkbox' id='absent`+i1+`_`+i2+`'>
            </div>
            `
        })
        document.getElementById('namesList'+i1).innerHTML = docAdd
    })
}

function onSiteLoad(){
    buildButtons = ''
    buildSite = ''
    names.forEach(function(element, index){
        buildButtons += "<button onclick='setSite("+index+")'>"+element.title+"</button>"
        buildSite+=`
        <div id="hider`+index+`" hidden>
            <div class="container" id="container`+index+`">
                <div class="nameContainer">
                    <div id="namesList`+index+`"></div>
                    <div class="divider"></div>
                    <div class="textItem">Add Student:</div>
                    <div class="textItem">
                        <input type="text" class="textItem" id="newName`+index+`" class="textItem"><button onclick="nameButton()" class="textItem">add</button>
                    </div>
                    <div class="divider"></div>
                    <div class="textItem">Custom Seed:</div>
                    <input type="text" class="textItem" id="customSeed`+index+`">
                    <div class="textItem">Group Size:</div>
                    <input type="text" class="textItem" id="groupSize`+index+`"><button onclick="generateGroups()" class="textItem">generate</button>
                </div>
                <div class="groups textItem" id="groups`+index+`">
                    <div class="groupItem">
                        Click "generate" to create groups.
                    </div>
                </div>
            </div>
        </div>
        `
    })
    document.getElementById('selectorButtons').innerHTML = buildButtons
    document.getElementById('outerContainer').innerHTML = buildSite
    drawSite();
    setSite(0);
}

function addName(input){
    names[currentSite].namesList.push(input)
    //refreshCookie()
    drawSite()
}

function removeName(index){
    checkedVals = []
    for(i = 0; i<names.length; i++){checkedVals.push([])}
    names.forEach(function(element2,index2){
        element2.namesList.forEach(function(element3, index3){
            checkedVals[index2].push(document.getElementById("absent"+index2+"_"+index3).checked)
        })
    })
    names[currentSite].namesList.splice(index, 1)
    checkedVals[currentSite].splice(index, 1)
    //refreshCookie()
    drawSite()
    names.forEach(function(element2,index2){
        element2.namesList.forEach(function(element3, index3){
            document.getElementById("absent"+index2+"_"+index3).checked = checkedVals[index2][index3]
        })
    })

}

function nameButton(){
    names.forEach(function(el,ind){
        if(document.getElementById('newName'+ind).value != ''){
            addName(document.getElementById('newName'+ind).value)
            document.getElementById('newName'+ind).value=''
        }
    })
}

daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
var today = new Date()
if(today.getFullYear()%4 == 0 && (today.getFullYear()%400 == 0 || today.getFullYear()%100 != 0)){
    daysInMonths[1] += 1
}

function createOneGroup(el, ind){
    var today = new Date()
    
    daysSinceLastYear = 0
    for(i=0; i<today.getMonth(); i++){
        daysSinceLastYear += daysInMonths[i]
    }
    daysSinceLastYear += today.getDate()
    customSeed = parseInt(document.getElementById("customSeed"+ind).value)
    seed = (isNaN(customSeed) ? daysSinceLastYear : customSeed)
    namesList = []
    el.namesList.forEach(function(element, index){
        if(!document.getElementById('absent'+ind+'_'+index).checked){
            namesList.push(element)
        }
    })
    shuffle(namesList, seed)
    shuffle(namesList, random(seed))
    shuffle(namesList, random(seed*2))
    shuffle(namesList, seed)
    //shuffled = ''
    size = parseInt((document.getElementById('groupSize'+ind).value))
    if(size<1){
        return "<div class='groupItem'>Group size cannot be less than 1!</div>"
    }
    if(namesList.length == 0){
        return "<div class='groupItem'>Please add items to list.</div>"
    }
    if(isNaN(size)){
        size=2
    }
    extra = namesList.length%size
    numGroups = Math.floor(namesList.length/size)
    if(numGroups<1){numGroups = 1}
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
        nameDoc+=`<div class="groupItem">`+addItem+`</div>`
    })
    nameDoc += "<div class='divider'></div><div class='groupItem'>(Generated with seed "+seed+")</div>"
    return nameDoc
}

function generateGroups(){
    names.forEach(function(el,ind){
        document.getElementById('groups'+ind).innerHTML = createOneGroup(el, ind)
    })
}