function add(num1, num2 = 20){
    // num2 = num2 || 0
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}

// const result = add(15);
// console.log(result);

function fullName(first, last = 'Chowdhury'){
    const name = first + ' ' + last;
    return name;
}

const totalName = fullName('Rahim');
console.log(totalName);