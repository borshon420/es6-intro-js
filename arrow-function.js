function add(num1, num2){
    return num1 + num2;
}
// function expression 
const add2 = function add2(num1, num2){
    return num1 + num2;
}
// function expression anonymous
const add3 = function(num1, num2){
    return num1 + num2;
}

// arrow function
const add4 = (num1, num2) => num1 + num2;


const total = add(15, 15);
const total2 = add2(15, 15);
const total3 = add3(15, 15);
const total4 = add4(15, 15);
console.log(total, total2, total3, total4)