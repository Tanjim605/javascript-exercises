const reverseString = function (string) {
    // eikhane jodi empty string set na kori taile undefined set thake shurute
    let result = "";
    // console.log(string.length -1);
    for (let i = string.length-1; i >= 0; i--) {
        result += string[i];
    }
    // console.log(result);
    return result;
    
};

// reverseString("1234")

// Do not edit below this line
module.exports = reverseString;
