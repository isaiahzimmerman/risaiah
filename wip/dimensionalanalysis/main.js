let units = [
    ['s','m','kg','A','K','mol','cd','J','N','C','degC','kat','lx','W','Pa','V','Wb','T','lm','Hz','Bq','Gy','ohm','H','F','sr','Sv','rad'],
    ['s','m','kg','A','K','mol','cd','kg*m^2/s^2','kg*m/s^2','A*s','K-273.15','mol/s','cd*sr/m^2','kg*m^2/s^3','kg/m*s^2','kg*m^2/s^3*A','kg*m^2/s^2*A','kg/s^2*A','cd*sr','1/s','1/s','m^2/s^2','kg*m^2/s^3*A^2','kg*m^2/s^2*A^2','s^4*A^2/kg*m^2','sr','m^2/s^2','s^3*A^2/kg*m^2']
]

inputUnits = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]

function analyze(inputNum,inputDen,outputNum,outputDen) {
    let inputNums = inputNum.split('*')
    
    console.log(inputNums)
    
    if(inputNums[0].split(' ').length == 2){
        
        
        inputCoefficient = inputNums[0].split(' ')[0]
        console.log(inputNums[0].split(' ')[1])
        inputNums[0] = (inputNums[0].split(' ')[1])
    }else{
        inputCoefficient = 1
    }
    
    console.log('coefficeint '+inputCoefficient+' input nums: '+inputNums)
    
    function convertToBaseUnits(){
        
    }
    
    function seperate(input,numerator){
        seperated = inputNum.split('*')
        sepOutput = []

        seperated.forEach(iterate2)

        function iterate2(value){
            if(value.split('^').length == 2){
                sepOutput.push([value.split('^')[0],parseInt(value.split('^')[1],10)])
            }else{
                sepOutput.push([value,1])
            }
        }

        return sepOutput
    }
    
    function splitNum(input){
        if(input.split('/').length == 2){
            numdum = input.split('/')
            console.log(seperate(numdum[0]))
            console.log(seperate(numdum[1]))
        }else{
            num = inputNums[0]
            console.log(seperate(num[0]))
        }
    }
    
}

/*
s - 0

input
seperate into units and 

*/