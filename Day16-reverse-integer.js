var reverse = function(x) {
    let stringNum = Math.abs(x).toString();
    let reverseString = '';

    for (let i = stringNum.length - 1; i >= 0; i--) {
        reverseString += stringNum[i];
    }

    let reversedNumber = parseInt(reverseString) * Math.sign(x);

    if (reversedNumber < -(2**31) || reversedNumber > (2**31 - 1)) {
        return 0;
    }

    return reversedNumber;
};
