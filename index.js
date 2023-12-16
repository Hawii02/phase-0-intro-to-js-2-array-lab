// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]
console.log(cats);

function destructivelyAppendCat(){
    cats.push("Ralph")
    console.log(cats)
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
    console.log(cats)
}
function destructivelyRemoveLastCat(){
 cats.pop()
 console.log(cats)
}
function destructivelyRemoveFirstCat(){
    cats.shift()
    console.log(cats)
}
function appendCat (name) {
    let newCats = [...cats, name];
    return newCats;
}
function prependCat (name){
    let afterCats = [name,...cats]
    return afterCats;
}
function removeLastCat() {
    let lastCats = cats.slice(0, -1);
    return lastCats;
}
function removeFirstCat() {
    let firsCats = cats.slice(1)
    return firsCats;
}