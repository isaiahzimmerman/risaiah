colors = [
    '--theme-softbg-0',
    '--theme-color-0',
    '--theme-color-1',
    '--theme-color-2',
    '--theme-color-3',
    '--theme-bw-0',
    '--theme-bw-1',
    '--theme-gr-0',
]

function drawSite(){
    colorsDiv = ''
    colors.forEach(function(element, index){
        colorsDiv += `<div class="color" style="background-color: var(`+element+`)"><span>`+element+`</span></div>`
    })
    document.getElementById('colors').innerHTML = colorsDiv
}