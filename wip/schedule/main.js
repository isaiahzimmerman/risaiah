employees=['isaiah', 'elijah', 'bob']

function view(selector){
    document.getElementById("view"+selector).hidden = false
    document.getElementById("view"+((selector+1)%4)).hidden = true
    document.getElementById("view"+((selector+2)%4)).hidden = true
    document.getElementById("view"+((selector+3)%4)).hidden = true
}

function createEmployeeList(){
    employeeList=""
    employees.forEach(function(element, index){
        employeeList += ("<div class='employee"+index+"'>"+element+"</div>")
    })
    document.getElementById("employeesList0").innerHTML = employeeList
}

function addEmployee(name){
    employees.push(name)
    createEmployeeList()
}