const repeatString = function(repeatString, number) {
    let result = "";
    if (number < 0) return "ERROR";
    for (let i =0;i <number; i++){
        result += repeatString;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
