function getLetterIndex(letter){
    return parseInt(letter, 36) - 10;
}

class SpellingNode {
    constructor(letter){
        this.value = letter;
        this.children = {}
        // new Array(26).fill(null);
        this.correctWord = false;
    }

    setCorrect(){
        this.correctWord = true;
    }

    getCorrect(){
        return this.correctWord;
    }

    addChild(letter){
        // let num = getLetterIndex(letter);
        if(this.children[letter] != null){
            return false;
        }
        this.children[letter] = new SpellingNode(letter);
        return true;
    }

    getChildren(){
        return this.children;
    }

    getChildAt(val){
        return this.children[val];
    }

    getValue(){
        return this.value;
    }
}

class SpellingTrie {
    constructor(){
        this.root = new SpellingNode(' ');
    }

    addWord(word){
        let currNode = this.root;
        let letters = word.split("");

        letters.forEach(letter => {
            let letterChar = letter.charAt(0);
            currNode.addChild(letterChar);
            currNode = currNode.getChildAt(letterChar);
        });

        currNode.setCorrect();
        return true;//??TODO
    }

    checkWord(word) {
        let currNode = this.root;
        let letters = word.split("");

        for(let i=0; i<letters.length; i++){
            if(currNode==null){return false;}
            let letterChar = letters[i].charAt(0);
            if(isNaN(getLetterIndex(letterChar))){return false;}
            currNode = currNode.getChildAt(letterChar);
        }
        if(currNode==null){return false;}

        return currNode.getCorrect();
    }

    printWords(){
        this.toPrint = document.createDocumentFragment();
        this.printWordsHelper("", this.root);
        document.getElementById("output").appendChild(this.fragment)
    }

    printWordsAfter(subWord, numToPrint){
        this.fragment = document.createDocumentFragment();
        let currNode = this.root;
        let letters = subWord.split("");

        // console.log(currNode)
        for(let j=0; j<letters.length; j++){
            if(currNode==null){break;}
            let letter = letters[j]
            let letterChar = letter.charAt(0);
            currNode = currNode.getChildAt(letterChar);
        }

        this.amountRemaining = numToPrint
        this.printWordsHelper(subWord.substring(0, subWord.length-1), currNode)
        document.getElementById("output").appendChild(this.fragment)
    }

    printWordsHelper(subWord, c){
        if(c==null){return;}
        if(this.amountRemaining<=0){return}
        // console.log(c)
        if(c.getCorrect()){
            let p = document.createElement("p");
            let currWord = (subWord+c.getValue()).toLowerCase();
            p.textContent = currWord;
            p.onclick = function(){
                // console.log(`https://www.oed.com/search/dictionary/?scope=Entries&q=${currWord}`)
                window.open(`https://www.oed.com/search/dictionary/?scope=Entries&q=${currWord}`, '_blank');
            }
            this.fragment.appendChild(p);
            this.amountRemaining--
        }
        let chils = c.getChildren();

        // chils.forEach(chil => {
        //     this.printWordsHelper(subWord+c.getValue(), chil);
        // });
        for (const chil in chils) {
            // console.log(chils[chil])
            this.printWordsHelper(subWord+c.getValue(), chils[chil]);
        }
    }
}

function textFieldUpdate(){
    const inputText = document.getElementById("textInput").value;
    document.getElementById('output').innerHTML = ''
    if(myTrie.checkWord(inputText)){
        document.getElementById('textInput').style.color = "green"
    }else{
        if(inputText == ""){
            document.getElementById('textInput').style.color = "black"
        }else{
            document.getElementById('textInput').style.color = "red"
        }
    }
    myTrie.printWordsAfter(inputText, 100)
}

function onSiteLoad(){
    size = wordsAlphaList.length
    for(i = 0; i<size; i++){
        myTrie.addWord(wordsAlphaList[i])
    }

    document.getElementById("textInput").addEventListener("input", function(event) {
        textFieldUpdate()
    });
    textFieldUpdate()

    document.getElementById("textInput").addEventListener("keypress", function(event) {
        const char = String.fromCharCode(event.keyCode);
        if (!/[a-zA-Z]/.test(char)) { // Allow only a-z or A-Z
            event.preventDefault();
        }
    });
}

const myTrie = new SpellingTrie();