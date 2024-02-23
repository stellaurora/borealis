let allStrings = [
    "if i could save time in a bottle",
    "what brings you here?",
]

let allStrings2 = [
    "hello",
    "hola",
    "g'day",
    "hallo",
]

const strings = allStrings.sort(() => {
    return Math.random() - 0.5});

    
const strings2 = allStrings2.sort(() => {
    return Math.random() - 0.5});


function getStrings(num) {
    return [strings, strings2][num];
}