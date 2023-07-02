// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

const destructivelyPrependCat = function (name) {
    return cats.unshift(name);
}

const destructivelyRemoveLastCat = () => {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    const copyArray = [...cats]
    copyArray.push(name);
    return copyArray;
}

function prependCat (name) {
    const copyArray = cats.slice();
    copyArray.unshift(name);
    return copyArray;
}

const removeLastCat = function () {
    const copyArray = cats.slice();
    copyArray.pop();
    return copyArray;
}

const removeFirstCat = function () {
    const copyArray = cats.slice();
    copyArray.shift();
    return copyArray;
}