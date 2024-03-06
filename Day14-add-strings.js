var addStrings = function(num1, num2) {
    // return(num1*1+num2*1).toString();
    const bigintNum1 = BigInt(num1);
    const bigintNum2 = BigInt(num2);
    
    return (bigintNum1 + bigintNum2).toString();
};