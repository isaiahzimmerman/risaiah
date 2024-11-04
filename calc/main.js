cellText = []

function isInt(str){
    return `${parseInt(str)}` == str
}

function isOperator(str){
    return ("+-/*()".includes(str))
}

function selectCell(){
    onkeydown = (event) => {
        if(event.key == "Backspace"){
            cellText.pop()
        }else if(event.key != "Shift"){
            cellText.push(event.key)
        }
        document.getElementById("calculator-cell").innerHTML = cellText.join("")
        console.log(cellText)
    };
}

function parseTextToExpressions(cellText){
    output = []
    for(i=0; i<cellText.length; i++){
        if(isInt(cellText[i]) || cellText[i] == "."){
            num = ""
            while((isInt(cellText[i]) || cellText[i] == ".") && i<cellText.length){
                num += cellText[i]
                i++
            }
            i--
            output.push(parseFloat(num))
        }else if(isOperator(cellText[i])){
            output.push(cellText[i])
        }
    }
    console.log(output)
    return output
}

function isParenthesesExpression(input){
    if(input.slice(0,1)[0] == "(")
        parenthesesOpen = 1
    else
        return false

    for (i=1; i<input.length; i++){
        if(input[i] == "("){
            parenthesesOpen++
        }else if(input[i] == ")"){
            parenthesesOpen--
        }

        if(parenthesesOpen == 0 && i<input.length-1){
            return false
        }
    }
    return true
}

function copyArray(input){
    out = []
    input.forEach(element => {
        out.push(element)
    });
    return out
}

function expressionsListToMathExpression(elst){
    let el = copyArray(elst)
    console.log(el.length, typeof el[0], el)
    if(isParenthesesExpression(el)){
        return {
            type: "parentheses",
            contents: expressionsListToMathExpression(el.slice(1, el.length-1))
        }
    }else if(el.includes("+") || el.includes("-")){
        console.log("plus")
        let isAdd = (el.indexOf("+") < el.indexOf("-"))
        let opInd = Math.min(el.indexOf("+"), el.indexOf("-"))
        if(!el.includes("+")){ opInd = el.indexOf("-"); isAdd=false }
        if(!el.includes("-")){ opInd = el.indexOf("+"); isAdd=true }
        console.log(isAdd, opInd,el,opInd+1,el.length,el.slice(opInd+1,el.length))
        return {
            type: "operator",
            operatorType: (isAdd ? "+" : "-"),
            children: [
                expressionsListToMathExpression(el.slice(0,opInd)),
                expressionsListToMathExpression(el.slice(opInd+1,el.length))
            ]
        }
    }else if(el.includes("*") || el.includes("/")){
        let isMultiply = (el.indexOf("*") < el.indexOf("/"))
        let opInd = Math.min(el.indexOf("*"), el.indexOf("/"))
        if(!el.includes("*")){ opInd = el.indexOf("/"); isMultiply=false }
        if(!el.includes("/")){ opInd = el.indexOf("*"); isMultiply=true }
        return {
            type: "operator",
            operatorType: (isMultiply ? "*" : "/"),
            children: [
                expressionsListToMathExpression(el.slice(0,opInd)),
                expressionsListToMathExpression(el.slice(opInd+1,el.length))
            ]
        }
    }else if(el.length == 1 && (typeof el[0]) == "number"){
        return {type: "number", value: el[0]}
    }
}

function run(){

}

mathExpression = {
    type: "operator",
    operatorType: "+",
    children: [
        {
            type: "operator",
            operatorType: "-",
            children: [
                {type: "number", value: 20},
                {
                    type: "operator",
                    operatorType: "*",
                    children: [
                        {type: "number", value: 22},
                        {type: "number", value: 20}
                    ]
                }
            ]
        },
        {type: "number", value: 20}
    ]
}

function evaluateMathExpression(expression){
    if(expression.type == "operator"){
        if(expression.operatorType == "+"){
            return evaluateMathExpression(expression.children[0]) + evaluateMathExpression(expression.children[1])
        }else if(expression.operatorType == "-"){
            return evaluateMathExpression(expression.children[0]) - evaluateMathExpression(expression.children[1])
        }else if(expression.operatorType == "*"){
            return evaluateMathExpression(expression.children[0]) * evaluateMathExpression(expression.children[1])
        }else if(expression.operatorType == "/"){
            return evaluateMathExpression(expression.children[0]) / evaluateMathExpression(expression.children[1])
        }
    }else if (expression.type=="number"){
        return expression.value
    }else if (expression.type =="parentheses"){
        return evaluateMathExpression(expression.contents)
    }
}