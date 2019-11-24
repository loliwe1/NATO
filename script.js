<<<<<<< HEAD
function nato(str){
    const nato = {
        'a':"Alfa", 
        'b':"Bravo", 
        'c':"Charlie", 
        'd':"Delta",
        'e':"Echo", 
        'f':"Foxtrot",
        'g':"Golf",
        'h':"Hotel",
        'i':"India",
        'j':"Juliett",
        'k':"Kilo",
        'l':"Lima",
        'm':"Mike", 
        'n':"November", 
        'o':"Oscar",
        'p':"Papa",
        'q':"Quebec",
        'r':"Romeo",
        's':"Sierra",
        't':"Tango",
        'u':"Uniform",
        'v':"Victor",
        'w':"Whiskey",
        'x':"Xray",
        'y':"Yankee",
        'z':"Zulu",
        '?':'?',
        '.':".",
        '!':"!"
    };
    let res = '';
    for(let value of str){
        if(value === ' ') continue;
        value = value.toLowerCase();
        res = res + nato[value] + ' ';
    };
    return res.trim();
=======
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
>>>>>>> 4979bf406a943e6472e022bca7fb3938c634dea5
}

input.onchange = function(){
    NATO.innerHTML = nato(this.value);
};
