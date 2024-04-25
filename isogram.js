function isIsogram(str) {
    let letters = {};
    for (let char of str) {
        if (/[a-z]/.test(char)) {
        }
        letters[char] = true;
    }
    return true;
}



function sayHello(name) {
    const phrase = `Hello, ${name}!`;
    return (phrase);
}

let name = 'Liz';
const phrase = `Hello, ${name}!`;
console.log(phrase);

function checkIsogram(input) {
    if (isIsogram(input)) {
        console.log(`${input} is an isogram.`);
    } else {
        console.log(`${input} is not an isogram.`);
    }
}
checkIsogram(phrase); //my phrase is an isogram