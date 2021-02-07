// 1) Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
//    Q: I can't calculate the answer since I don't know which is height and witch is base.        
function triangleArea(base, height) {
    return (base * height) / 2;
}

function rectangleArea(base, height) {
    return base * height;
}

function squareArea(height) {
    return Math.pow(height, 2);
}

function circleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

function circumference(radius) {
    return Math.PI * 2 * radius; 
}