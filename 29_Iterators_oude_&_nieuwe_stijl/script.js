// OUDE STIJL LOOPS

// Wile loop:
let colors = ['yellow', 'blue', 'red', 'orange'];

let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

// For loop:
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// NIEUWE STIJL: ARRAY METHODS

// for each example from Array.prototype.forEach():
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

// foreach opdracht:
colors.forEach(color => console.log(color));

// let myColors = ['yellow', 'blue', 'red', 'orange'];
// myColors.forEach(color => console.log(color));

//ANTWOORDEN:
//1. While neemt 5 regels en for neemt 3 regels in beslad
//2. foreacht neemt maar 1 regel in beslag 
//3. Voordelen foreach:
//    - het is veel korter scchrijven
//    - de naam for each lijkt mij wat duidelijker, het voert 
//      een opgegeven functie eenmaal uit VOOR ELK (for each) array-element.