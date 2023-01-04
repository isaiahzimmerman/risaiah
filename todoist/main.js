let api

function loadSite(){
    let apiKey = prompt("Enter your Todoist API Key")
    api = new todo.TodoistApi(apiKey)
    updateTasks()
    createCalendar()
}

var taskList;

var bigTaskList = [[],[],[],[],[],[],[],[],[],[],[],[],[],[]]

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const today = new Date()

function isLeapYear(input) {
    if ((0 == input % 4) && (0 != input % 100) || (0 == input % 400)) {
        return true
    }
    return false
}

const monthLengths = [31, (isLeapYear(today.getYear()) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const classTags = ["[APCOMSCI]", "[CP12ENG]", "[CHSSPAN]", "[BIB12]", "[APCALC]", "[HSHEALTH]"]

const classes = ["Computer_Science", "English", "Spanish", "Bible", "Calculus", "Health"]

function getDates(){
    firstDay = today.getDate() - today.getDay()
    output = {dates: [], lastDay: {}}
    month = today.getMonth()
    offset = 0
    year = today.getYear()
    for (i = 0; i<14; i++){
        currentVal = firstDay + i - offset
        if(currentVal > monthLengths[month]){
            month++
            if(month == 12){
                month = 0
                year++
            }
            firstDay = 1
            offset = output.dates.length
            currentVal = firstDay + i - offset
        }else if(currentVal < 1){
            month--
            if(month == -1){
                month = 11
                year--
            }
            firstDay = monthLengths[month] - today.getDay() + 1
            offset = output.dates.length
            currentVal = firstDay + i - offset
        }
        console.log({month})

        if(i == 13){
            output.lastDay = {month: month, day: currentVal, year: year}
        }
        output.dates.push(currentVal)
    }
    return output
}

const datesList = getDates()

//merge 2 arrays with no duplicates
function mergeArrays(inputs){
    newArray = []
    for(i3 = 0; i3<inputs.length; i3++){
        for(i4 = 0; i4<inputs[i3].length; i4++){
            console.log({i3, i4})
            if(newArray.indexOf(inputs[i3][i4]) < 0){
                console.log(inputs[i3][i4])
                newArray.push(inputs[i3][i4])
            }
        }
    }
    return newArray
}

function genOrder(input){
    return input.day + input.month * 31 + input.year * 366
}

function getLabels(input, filter){
    output = {label: null, isTest: false}

    input.forEach(function(loopElement){
        filter.forEach(function(filterElement){
            if(loopElement == filterElement){output.label = loopElement}
            if(loopElement == "Test"){output.isTest = true}
        })
    })

    return output
}

function switchBigDate(index){
    document.getElementById("bigItem").innerHTML = datesList.dates[index]
    bigDateTasks = bigTaskList[index]
    bigDateDiv = ""
    bigDateTasks.forEach(function(element, index){
        labelsList = getLabels(element.labels, classes)

        bigDateDiv += `
        <div class="item${(labelsList.label ? " "+labelsList.label : "")}${(labelsList.isTest ? " test" : "")}">
            <div class="taskInfo" onclick="toggleBox(${index})">
                <div class="task">${element.content}</div>
                ${
                    (
                        element.due.datetime ?
                        `<div class="due">${element.due.datetime.substring(10)}</div>` :
                        ``
                    )
                }
                ${(labelsList.label ? "<div class='label "+labelsList.label+"'>"+labelsList.label+"</div>" : "")}
            </div>
        </div>`
    })
    document.getElementById("dayTodos").innerHTML = bigDateDiv
}

function updateCalendar(){
    console.log(`overdue | due before: ${(datesList.lastDay.month + 1)%12}/${datesList.lastDay.day}`)
    api.getTasks({filter: `overdue | due before: ${(datesList.lastDay.month + 1)%12}/${datesList.lastDay.day}/${datesList.lastDay.year + 1900}`})
    .then((tasks) => {
        bigTaskList = [[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
        tasks.forEach(function(element, index){
            bigTaskList[datesList.dates.indexOf(parseInt(element.due.date.substring(8)))].push(element)
        })
        bigTaskList.forEach(function(element, index){
            cssClasses = document.getElementById(`calendarItem${index}`).classList
            for(i=0; i<6; i++){
                cssClasses.remove(`fullness${i}`)
            }
            if(element.length >= 5){
                cssClasses.add("fullness5")
            }else{
                cssClasses.add(`fullness${element.length}`)
            }
        })
        switchBigDate(datesList.dates.indexOf(today.getDate()))
    })
    .catch((error) => console.log(error))
}

function updateTasks(){
    document.getElementById("content").innerHTML = "Loading..."

    api.getTasks({filter: "today | tomorrow | overdue | in 2 days"})
    .then((tasks) => {
        taskList = []

        tasks.forEach(function(element, index){
            dueDate = element.due.date

            due = {month : parseInt(dueDate.substring(5,7)), day : parseInt(dueDate.substring(8,10)), year : parseInt(dueDate.substring(0,4))}

            order = genOrder(due)

            due = {month: due.month, day: due.day, year: due.year, order: order, content: element.content, labels: element.labels, id: element.id}

            console.log(due.id)

            if(taskList.length){
                let biggest = true

                for(i = 0; i<taskList.length; i++){
                    if(taskList[i].order > due.order){
                        taskList.splice(i, 0, due)
                        biggest = false
                        break
                    }
                }
                if(biggest){taskList.push(due)}
            }else{
                taskList.push(due)
            }

            // var dateTime;
            // if(element.due.datetime){
            //     dateTime = element.due.datetime
            // }else{
            //     dateTime = element.due.date + "T23:59:59Z"
            // }

            // taskList.push(due)
        })

        console.log(taskList)
        taskDiv = ""

        taskList.forEach(function(element, index){
            labelsList = getLabels(element.labels, classes)

            taskDiv += `<div class="item${(labelsList.label ? " "+labelsList.label : "")}${(labelsList.isTest ? " test" : "")}">
                <div class="taskCheck">
                    <input type="checkbox" onclick="completeTask(${index})" id="completeBox${index}">
                </div>
                <div class="taskInfo" onclick="toggleBox(${index})">
                    <div class="task">${element.content}</div>
                    <div class="due">${months[element.month - 1]} ${element.day}, ${element.year}</div>
                    ${(labelsList.label ? "<div class='label "+labelsList.label+"'>"+labelsList.label+"</div>" : "")}
                </div>
            </div>`
        })
        
        document.getElementById("content").innerHTML = taskDiv
        updateCalendar()
    })
    .catch((error) => console.log(error))
}

function completeTask(index){
    if(document.getElementById(`completeBox${index}`).checked){
        console.log(document.getElementById(`completeBox${index}`).checked)
        api.closeTask(taskList[index].id)
        .then((isSuccess) => {console.log({isSuccess, removed:"removed"})})
        .catch((error) => console.log(error))
    }else{
        api.reopenTask(taskList[index].id)
        .then((isSuccess) => {console.log({isSuccess, removed:"added"})})
        .catch((error) => console.log(error))
    }
}

function toggleBox(index){
    document.getElementById(`completeBox${index}`).checked = !document.getElementById(`completeBox${index}`).checked
    completeTask(index)
}

function createCalendar(){
    for(i=0; i<14; i++){
        document.getElementById(`calendar`).innerHTML +=`<div class='calendarItem' onclick="switchBigDate(${i})" id="calendarItem${i}">${datesList.dates[i]}</div>`
    }
}

function assignLabels(){
    for(i = 0; i<taskList.length; i++){
        if(taskList[i].content.indexOf("[") > 0){
            for(i2 = 0; i2<classTags.length; i2++){
                if(taskList[i].content.indexOf(classTags[i2]) > 0){
                    console.log(taskList[i].labels)
                    console.log(mergeArrays([taskList[i].labels, [classes[i2]]]))
                    api.updateTask(
                        taskList[i].id, 
                        {labels: mergeArrays([taskList[i].labels, [classes[i2]]])}
                    )
                    .then((isSuccess) => console.log(isSuccess))
                    .catch((error) => {console.log(error)})
                }
            }
        }
    }
    updateTasks()
}