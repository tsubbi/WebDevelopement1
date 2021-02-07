function arrayOfMultiplies(base, limit) {
    return limit > 1 ? [base*limit].concat(arrayOfMultiplies(base, limit-1)) : base * limit;
}

console.log(arrayOfMultiplies(7, 5));

console.log(arrayOfMultiplies(12, 10));

console.log(arrayOfMultiplies(17, 6));