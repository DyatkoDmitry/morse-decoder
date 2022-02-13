const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let binaryArray = [];
    let binaryArrayWithoutZeros = [];
    let outString = []; 

    for(let i = 0; i < expr.length; i += 10){  
        binaryArray.push(expr.slice(i, i + 10));
    }

    binaryArray.forEach((value) => {
        binaryArrayWithoutZeros.push(value.replace(/00/g,''));
    })

    binaryArrayWithoutZeros.forEach((value) => {
        
        if(value === '**********') {
            outString.push(' ');
            return;
        }

        let morseStr = '';
        let morseLetter;

        for(let i = 0; i < value.length; i += 2){
            morseLetter = value.slice(i, i + 2);
            if(morseLetter === '10'){
                morseStr += '.';
            }else if(morseLetter === '11'){
                morseStr += '-';
            }
        }
        outString.push(MORSE_TABLE[morseStr]);
    })
    return outString.join('');
}

module.exports = {
    decode
}


