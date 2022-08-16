var Xmin = 0;
var Xmax = 0;
var Ymin = 0;
var Ymax = 0;

var xyValues = [
    {x:50, y:7},
    {x:60, y:8},
    {x:70, y:8},
    {x:80, y:9},
    {x:90, y:9},
    {x:100, y:9},
    {x:110, y:10},
    {x:120, y:11},
    {x:130, y:14},
    {x:140, y:14},
    {x:150, y:15}
];

var linRegValues = []


function linReg(dataSet){
    var sumX = 0
    var sumY = 0
    
    dataSet.forEach(function(currentValue){
        sumX += currentValue.x
        sumY += currentValue.y
    })

    var avgX = (sumX/dataSet.length)
    var avgY = (sumY/dataSet.length)

    var SSxx = 0
    var SSxy = 0
    dataSet.forEach(function(currentValue){
        SSxx += Math.pow((avgX - currentValue.x), 2)
        SSxy += ((avgX - currentValue.x)*(avgY - currentValue.y))
    })

    var slope = (SSxy/SSxx).toPrecision(4)
    var yIntercept = (avgY - slope * avgX).toPrecision(4)

    return {slope: slope, yIntercept: yIntercept, avgX: avgX, avgY: avgY, SSxx: SSxx, SSxy: SSxy, sumX: sumX, sumY: sumY}
}

function generateData(slope, yIntercept, xMin, xMax, step) {

    linRegValues.push({x: xMin, y: (slope * xMin + yIntercept)})
    linRegValues.push({x: xMax, y: (slope * xMax + yIntercept)})
    
    //console.log("aorking")
}

function loadChart(){
    //refresh the chart size
    Xmin = 0;
    Xmax = 0;
    Ymin = 0;
    Ymax = 0;

    if(xyValues!={}){
        xyValues.forEach(function(currentValue, index){
            //console.log(index)
            if(index==0){
                Xmin=currentValue.x
                Xmax=currentValue.x
                Ymax=currentValue.y
                Ymin=currentValue.y

                //console.log(Xmin+" "+Xmax+" "+Ymin+" "+Ymax)
            }else{
                if(currentValue.x < Xmin){
                    Xmin = currentValue.x
                }else if(currentValue.x > Xmax){
                    Xmax = currentValue.x
                }

                if(currentValue.y < Ymin){
                    Ymin = currentValue.y
                }else if(currentValue.y > Ymax){
                    Ymax = currentValue.y
                }
                //console.log(Xmin+" "+Xmax+" "+Ymin+" "+Ymax)
            }
        })
    }

    Xmin=Xmin-1
    Xmax=parseFloat(Xmax, 10)+1
    Ymin=Ymin-1
    Ymax=Ymax+1

    //console.log(Xmin+" "+Xmax+" "+Ymin+" "+Ymax)
    
    new Chart("myChart", {
        type: "scatter",
        data: {
          datasets: [{
            pointRadius: 3,
            pointBackgroundColor: "rgb(0,0,255)",
            data: xyValues
          },
          {
            type: "line",
            pointRadius: 0,
            fill: false,
            borderColor: "red",
            data: linRegValues
          }
        ]
        },
        options: {
          legend: {display: false},
          scales: {
            xAxes: [{ticks: {min: Xmin, max: Xmax}}],
            yAxes: [{ticks: {min: Ymin, max: Ymax}}],
          }
        }
    });
}

function refreshData(){
    var dataBody = ""

    if(xyValues!={}){
        xyValues.forEach(function(currentValue, index){
            //console.log("x="+currentValue.x+", y="+currentValue.y+", "+index)
            dataBody+=`
                <div id="chartData`+index+`">
                    <span>x = `+currentValue.x+`</span>
                    <span>y = `+currentValue.y+`</span>
                    <button onclick="deleteDataPoint(`+index+`)">delete</button>
                </div>`
        })
    }

    document.getElementById("chartData").innerHTML = dataBody
}

function deleteDataPoint(index){
    xyValues.splice(index, 1)
    loadChart()
    refreshData()
}

function addData(newX, newY){
    console.log(newX+" is x and y is "+newY)
    if(true){
        newXYs = [[],[]]
        newXYs[0] = newX.split(',')
        newXYs[1] = newY.split(',')

        console.log(newXYs)

        newXYs[0].forEach(function(value, index){
            xyValues.push({x: parseFloat(newXYs[0][index], 10), y: parseFloat(newXYs[1][index], 10)})
        })
    }
    loadChart()
    refreshData()

    document.getElementById('xData').value = ""
    document.getElementById('yData').value = ""
}

function calculateResults(dataSet){
    if(dataSet.length < 2){
        document.getElementById("slopeIntercept").innerHTML = "too short, need more values"
        document.getElementById("radius").innerHTML = ""
        document.getElementById("rSquared").innerHTML = ""
        document.getElementById("extraInfo").innerHTML=""

    }else{
        output = linReg(dataSet)

        var seperated = [[],[]]

        //calculates the summation of the (differences between each individual x value with average x) * (differences between each individual y value with average y)
        sumProdDiffs = 0
        xyValues.forEach(function(currentValue){
            seperated[0].push(currentValue.x)
            seperated[1].push(currentValue.y)

            sumProdDiffs += (currentValue.x - output.avgX) * (currentValue.y - output.avgY)
        })

        standardDeviationX = Math.standardDeviation(seperated[0])
        standardDeviationY = Math.standardDeviation(seperated[1])

        var radius = (sumProdDiffs/(standardDeviationX * standardDeviationY * xyValues.length))

        document.getElementById("slopeIntercept").innerHTML = "y = "+output.slope+"x + "+output.yIntercept
        document.getElementById("radius").innerHTML = "r = "+radius.toPrecision(4)
        document.getElementById("rSquared").innerHTML = "r^2 = "+Math.pow(radius, 2).toPrecision(4)

        //nerd Mode
        if(document.getElementById("nerdMode").checked){
            document.getElementById("extraInfo").innerHTML=
            `
            <br>
            Extra Information:<br>
            sum of x values = `+(output.sumX.toPrecision(6)*1)+`<br>
            sum of y values = `+(output.sumY.toPrecision(6)*1)+`<br>
            avg of x values = `+(output.avgX.toPrecision(6)*1)+`<br>
            avg of y values = `+(output.avgY.toPrecision(6)*1)+`<br>
            SSxx = `+(output.SSxx.toPrecision(6)*1)+`<br>
            SSxy = `+(output.SSxy.toPrecision(6)*1)
            //<div class="boxedInfo"></div> can be used if updated with boxed information
        }else{
            document.getElementById("extraInfo").innerHTML=""
        }

        return output
    }
}

function graphResults(){
    answer = calculateResults(xyValues)
    generateData(parseFloat(output.slope, 10), parseFloat(output.yIntercept, 10), Xmin, Xmax, (Xmax-Xmin)/2)
    loadChart()
}

function clearList(){
    xyValues.splice(0)
    refreshData()
    loadChart()
}