function connectExperienceDots(){
    let topBulletBox = document.querySelector(".experience_element_container:first-of-type .experience_position_bullet").getBoundingClientRect()
    let bottomBulletBox = document.querySelector(".experience_element_container:last-of-type .experience_position_bullet").getBoundingClientRect()
    let container = document.getElementById("experience")
    let containerBox = container.getBoundingClientRect()

    let connectionLine = document.getElementById("connection_line")
    if(!connectionLine)
        connectionLine = document.createElement("span")
    connectionLine.classList.add("connection_line")
    connectionLine.id = "connection_line"

    connectionLine.style.top = `${(topBulletBox.top + topBulletBox.bottom)/2 - containerBox.top}px`
    connectionLine.style.height = `${bottomBulletBox.top - topBulletBox.top}px`
    connectionLine.style.left = `${-containerBox.left + (topBulletBox.left + topBulletBox.right)/2
        // (4) px is width of connection line
        - (4)/2
    }px`

    container.appendChild(connectionLine)
}

document.addEventListener("DOMContentLoaded", function(){
    drawExperience()
    generateTags()
    connectExperienceDots()
    hideProjectsFilters()
    const cookies = parseCookies();
    if (cookies.theme) {
        colorTheme = cookies.theme
    } else {
        colorTheme = "auto"
    }
    if(!cookies.playedIntro){
        document.cookie = `playedIntro=true; path=/resume/; SameSite=Lax`
        playIntroAnimation()
    }else{
        hideIntro()
        document.getElementById("replay_intro").style.opacity = 1
        // playIntroAnimation()
    }
    showTheme()
})

function parseCookies() {
    return document.cookie.split('; ').reduce((acc, cookie) => {
        const [key, value] = cookie.split('=');
        acc[key] = decodeURIComponent(value);
        return acc;
    }, {});
} 

window.addEventListener("resize", function(){
    connectExperienceDots()
    resizeProjectsFilters()
})

const positions = [
    {
        company: "Grove City Area Meals on Wheels",
        position: "Web Design Intern",
        dates: "Sep 2024 - Dec 2024",
        description: [
            "Desc Line 1",
            "Desc Line 2"
        ]
    },
    {
        company: "Robots & Pencils",
        position: "Student Apps Growth Intern",
        dates: "Jan 2024 - Mar 2024",
        description: [
            "Desc Line 1",
            "Desc Line 2"
        ]
    }
]

function getPosition(pos){
    let description = ``
    pos.description.forEach(element => {
        description += `<div class="experience_element experience_desc">${element}</div>`
    });
    let posHTML = `<div class="experience_element_container">
        <div class="experience_element experience_company">${pos.company}</div>
        <div class="experience_element experience_position">
            <div class="experience_position_bullet"></div>
            <div class="experience_position_name">${pos.position}</div>
        </div>
        <div class="experience_element experience_dates">${pos.dates}</div>
        ${description}
    </div>`

    return posHTML
}

function drawExperience(){
    experienceHTML = ''
    for(let i=0; i<positions.length; i++){
        experienceHTML += getPosition(positions[i])
        if(i < positions.length-1){
            experienceHTML += `<div class="spacing"></div>`
        }
    }

    document.getElementById("experience").innerHTML = experienceHTML
}

function resizeProjectsFilters(){
    let h = document.getElementById("projects_filter_tags").getBoundingClientRect()
    let hi = document.getElementById("projects_filter_tags_inner").getBoundingClientRect()

    // console.log(h.height - hi.height)

    if(h.height != 0 || h.height - hi.height > 1){
        showProjectsFilters()
    }
}

function toggleProjectsFilters(){
    let h = document.getElementById("projects_filter_tags").getBoundingClientRect()

    if(h.height == 0){
        showProjectsFilters()
    }else{
        hideProjectsFilters()
    }
}

function hideProjectsFilters(){
    document.getElementById("projects_filter_tags").style.height = `0px`
}

function showProjectsFilters(){
    document.getElementById("projects_filter_tags").style.height = `${document.getElementById("projects_filter_tags_inner").scrollHeight}px`
}

const tags = [
    {
        section: "Languages",
        tags: [
            "HTML", "JavaScript", "CSS", "SQL", "Java", "Python"
        ]
    },
    {
        section: "Classes",
        tags: [
            "Programming II", "Discrete Math", "Data Structures and Algorithms", "Database Management", "Western Civilization"
        ]
    },
]

function generateTagSection(tagObject){
    let tagListHTML = ""

    tagObject.tags.forEach(function(tag){
        tagListHTML += `<div>${tag}</div>`
    })

    return `<div class="projects_filter_group">
        <div class="projects_filter_group_title">${tagObject.section}</div>
        <div class="projects_filter_group_items">
            ${tagListHTML}
        </div>
    </div>`
}

function generateTags(){
    tagsHTML = ""
    tags.forEach(function(tagObject){
        tagsHTML += generateTagSection(tagObject)
    })

    document.getElementById("projects_filter_tags_inner").innerHTML = tagsHTML
}

let colorTheme

function cycleTheme(){
    if(colorTheme == "auto"){
        colorTheme = "dark"
    }else if(colorTheme == "dark"){
        colorTheme = "light"
    }else{
        colorTheme = "auto"
    }

    showTheme()

    document.cookie = `theme=${colorTheme}; path=/resume/; SameSite=Lax`;

    document.getElementById("color_theme_selector").innerText = colorTheme=="auto" ? "System" : colorTheme
}

function showTheme(){
    if(colorTheme == "auto"){
        document.documentElement.setAttribute('color-theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light")
    }else{
        document.documentElement.setAttribute('color-theme', colorTheme)
    }
}