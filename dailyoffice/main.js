function setOfficeLinks(){
    links=[
        {id: "morning",time:8},
        {id: "noonday", time:12},
        {id: "evening", time:18},
        {id: "compline", time:21}
    ]

    today = new Date();

    links.forEach(element => {
        document.getElementById(element.id).setAttribute("href", `https://dailyoffice.app/office.php?date=${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}&hour=${element.time}`)
    });

    document.getElementById("title").innerHTML = `Daily Office ${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`
}