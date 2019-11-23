input.onchange = function(){
    let words = this.value;
    let result = '';
    let nato = ["Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliett", "Kilo", "Lima", "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "Xray", "Yankee", "Zulu"];
    let regExp = /\s+/g;
    let natoWord = words.replace(regExp, '');
    natoWord = natoWord.toLowerCase().split('');
    for(let i=0; i<natoWord.length; i++){
        for(let j=0; j<nato.length; j++){
            if(natoWord[i].toUpperCase() === nato[j][0] ){
                result = result + nato[j] + ' ';
            }

        }
        if(natoWord[i] == '!' | natoWord[i] == '?' | natoWord[i] == ','| natoWord[i] == '.'){
            result = result+ natoWord[i]+ ' ';
        }
    }
    NATO.innerHTML = result;
}
