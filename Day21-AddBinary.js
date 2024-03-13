var addBinary = function(a, b) {
    let binaryAddition = BigInt(`0b${a}`) + BigInt(`0b${b}`);
    return binaryAddition.toString(2);
};
