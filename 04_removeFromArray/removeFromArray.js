const removeFromArray = function (array, ...num) {
    // const arg = [...arguments]; // joto arguments pass hoise oder shobaike ekta array te convert kore dey

    // console.log(arg);
    // console.log(num);

    const dels = num;
    // console.log("dels: ", dels);

    for (let i = 0; i < array.length; i++) {

        // let x = dels.find((el) => { el == array[i] })        // eitate curly bracket thakay kaj kore nai
        let x = dels.find((el) => el === array[i])
        // console.log(x, array[i]);

        if (x) {     // if found in x then remove it
            for (let j = i; j < array.length; j++) {
                array[j] = array[j + 1];
            }
            array.pop();
            i = -1;     // -1 e jawar reason hoilo, loop er kaj e gele abar ++ hoye 0 theke shuru hoy
        }
    }
    console.log(array);

    return array;
};

removeFromArray([1, 2, 3], "1", 3)

// Do not edit below this line
module.exports = removeFromArray;
