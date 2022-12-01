colors = [
    [
        '--theme-softbg-0',
        '--theme-color-0',
        '--theme-color-1',
        '--theme-color-2',
        '--theme-color-3',
        '--theme-bw-0',
        '--theme-bw-1',
        '--theme-gr-0',
        '--theme-green-0',
        '--theme-red-0',
    ],
    [
        '--theme-softbg-0-opp',
        '--theme-color-0-opp',
        '--theme-color-1-opp',
        '--theme-color-2-opp',
        '--theme-color-3-opp',
        '--theme-bw-0-opp',
        '--theme-bw-1-opp',
        '--theme-gr-0-opp',
        '--theme-green-0-opp',
        '--theme-red-0-opp',
    ],
]

function drawSite(input, num){
    colorsDiv = ''
    colors[num].forEach(function(element, index){
        colorsDiv += `<div class="color" style="background-color: var(`+element+`)"><span>`+element+`</span></div>`
    })
    document.getElementById(input).innerHTML = colorsDiv
}