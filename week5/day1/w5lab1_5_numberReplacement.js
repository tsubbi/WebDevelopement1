// 5) Write a JavaScript program to replace all the numbers with a specified number of a given array of integers.

function replace(arr, eliminateNum, replaceNum) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == eliminateNum) {
            arr[i] = replaceNum;
        }
    }

    return arr;
}

const dataSet = [1, 2, 4, 2, 4, 5, 3, 7, 9];

console.log(replace(dataSet, 2, 6));