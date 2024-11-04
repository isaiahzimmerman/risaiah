let monthsSince
let monthsSinceHTML
let currentDrawnMonth

const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function onPageLoad(){
    monthsSince = getMonthsSince(4, 24, 2021)
    onscroll = updateScrollPosition
    generateMonthsHTML()
    generateMonthImages()
}

function generateMonthImages(){
    paperHTML = ""
    monthsSince.forEach(function(element, index) {
        paperHTML += `<img src="assets/paper_ball.png" id="paper${index}" class="paper" style = "top:${Math.random() * 90}% ; left: ${Math.random() * 90}%;">`
    });
    document.getElementById("paperContainer").innerHTML = paperHTML
}

function generateMonthsHTML(){
    monthsSinceHTML = []
    monthsSince.forEach(element => {
        dateText = ""
        for(i=0; i<element.first; i++){
            dateText+="<div></div>"
        }
        for(i=1; i<+element.daysInMonth; i++){
            dateText+=`<div>${i}</div>`
        }
        monthsSinceHTML.push(dateText)
    });
}

function updateScrollPosition(){
    dateContainer = document.getElementById("currentDate")
    numberBox = dateContainer.getBoundingClientRect()

    g = 1-1.8*(numberBox.top/window.innerHeight - 0.2)
    
    currentMonthIndex = 0
    if(0 <= g && g <= 1){
        currentMonthIndex = Math.floor(monthsSince.length*(g**2))
    }else if(g>0){
        currentMonthIndex = monthsSince.length - 1
    }

    if(currentDrawnMonth != currentMonthIndex){
        viewedMonth = monthsSince[currentMonthIndex]

        document.getElementById("currentMonth").innerHTML = months[viewedMonth.month]
        document.getElementById("currentDate").innerHTML = monthsSinceHTML[currentMonthIndex]
    }
    // % down screen = px down screen / height
}

function getMonthsSince(month, day, year){
    monthsSince = []
    today = new Date()
    while(year < today.getFullYear() || month <= today.getMonth()){
        monthsSince.push({month: month, first: new Date(year, month, 1).getDay(), daysInMonth: getDaysInMonth(month, year)})
        if(month == 11){
            month = 0
            year++
        }else{
            month++
        }
    }
    return monthsSince
}

function getDaysInMonth(month, year){
    daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    var today = new Date()
    if(year%4 == 0 && (year%400 == 0 || year%100 != 0)){
        daysInMonths[1] += 1
    }
    return daysInMonths[month]
}