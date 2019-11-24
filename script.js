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
}

input.onchange = function(){
    NATO.innerHTML = nato(this.value);
};
