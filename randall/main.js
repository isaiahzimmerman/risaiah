

function drawPyramid(tiers)
{
    pyramidHTML = ""
    personCount = 0
    for(i=tiers;i>=1;i--)
    {
        pyramidHTML += `<div class="tier">`
        for(j=i; j<= tiers; j++)
        {
            personCount ++
            pyramidHTML += `<div class="box">text ${personCount}</div>`
        }
        pyramidHTML += `</div>`
    }
    document.getElementById("main").innerHTML = pyramidHTML
}