// 6) Write a JavaScript program that sorts a given array.
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    let left = [];
    let right = [];
    let reference = arr.pop();
    let length = arr.length;
    
    for (i = 0; i < length; i++) {
        (arr[i] <= reference) ? left.push(arr[i]) : right.push(arr[i]);
    }

    return [].concat(quickSort(left), reference, quickSort(right));
}

const dataSet1 = [13, 50, 2, 45, -1, 74, 11 ];
const dataSet2 = [109, 136, 156, 188, 19, 190, 2, 34, 55, 90];
console.log(quickSort(dataSet1));
console.log(quickSort(dataSet2));