//// 7) Write a JavaScript program that reverses a given array
// https://stackoverflow.com/a/28006124/14939990

function recursiveReverse(arr) {
    return (arr.length > 1) ? [arr.pop()].concat(recursiveReverse(arr)) : arr.pop();
}

function doWhileReverse(arr) {
    var reversed = [];

    do {
        reversed.push(arr.pop());
    } while (arr.length >= 1);

    return reversed;
}


const dataSet1 = ["apple", "orange", "grape", "banana"];
const dataSet2 = [0, 1, 2, 3, 4];
const dataSet3 = [9, 8, 7, 6, 5]; 

console.log(doWhileReverse(dataSet1));
console.log(recursiveReverse(dataSet2));
console.log(dataSet3.reverse());