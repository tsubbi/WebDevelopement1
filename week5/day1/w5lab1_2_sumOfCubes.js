// 2) Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given integer.

function sumOfCubes(num) {
    let result = 0;

    for (i = 1; i <= num; i++) {
        result += Math.pow(i, 3);
    }

    return result;
}
