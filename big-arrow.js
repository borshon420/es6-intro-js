const add = (num1, num2) => num1 + num2
const sum = add(15, 15);
console.log(sum);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(4, 12, 3);
console.log(result);

const tenTimes = (num1) => num1 * 10
const output = tenTimes(17);
console.log(output)

const getName = () => 'Bandon tailor'
const name = getName()
console.log(name);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}

const totals = doMath(12, 5);
console.log(totals);
