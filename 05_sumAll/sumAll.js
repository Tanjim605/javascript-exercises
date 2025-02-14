const isValid = function (num) {
    if (num < 0) return false;      // negative
    if (isNaN(num)) return false;   // array ke check kore
    if (!Number.isInteger(num)) return false;

    if (Number.isInteger(num)) return false;    // integer na hoile eita false hoy taile if condition fulfil hoy na

    // if all oke then valid, so return true;
    return true
}

const sumAll = function (num1, num2) {

    if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    if(!isValid(num1)) return "ERROR";
    if(!isValid(num2)) return "ERROR";

    let sum = 0
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }

    console.log(num1, num2);
    console.log(sum);

    return sum;
};

sumAll(1, 4000)

// Do not edit below this line
module.exports = sumAll;
