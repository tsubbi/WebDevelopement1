// 9) Filter the customers array to show the customer with the most expensive order.

function findMax(arr) {
    let tmp = 0;
    arr.forEach(num => {
        (num > tmp) ? tmp = num : "";
    });

    return tmp
}

let dataSet = [45, 60, 87, 78, 5, 1];

console.log(findMax(dataSet));
console.log(Math.max(...dataSet));