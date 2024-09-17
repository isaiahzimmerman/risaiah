settingsPrefsList = {
    showArrow: {description: "Show Movement Arrow", linkedVar: "showArrow"},
    newinventorystyle: {description: "New Inventory Style", linkedVar: "newinventorystyle"},
}

function drawSettings(){
    settingsHTML = ``
    for (const key in settingsPrefsList) {
        if (settingsPrefsList.hasOwnProperty(key)) {  // Optional: Filter out inherited properties
            element = settingsPrefsList[key]
            settingsHTML += 
            `<div class="settingsItem">
                <span class="settingsLabel">${element.description}</span>
                <input class="settingsSwitch" type="checkbox" onchange="updatePreference('${element.linkedVar}')" id="pref_${element.linkedVar}">
            </div>`
        }
    }
    document.getElementById("settingsPreferenceContainer").innerHTML = settingsHTML
}

function updateSettings(){
    for (const key in settingsPrefsList) {
        if (settingsPrefsList.hasOwnProperty(key)) {  // Optional: Filter out inherited properties
            document.getElementById(`pref_${key}`).checked = gameInfo[key]
        }
    }
}

function updatePreference(key){
    gameInfo[key] = document.getElementById(`pref_${key}`).checked
}

function closeSettings(){
    if(!gameInfo['showArrow']){ hideArrow() }
    if(players.length != 0){drawPossessions(players[currentPlayer])}
    document.getElementById("overlay").style.display = "none"
}