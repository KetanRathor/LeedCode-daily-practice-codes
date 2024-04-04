var divide = function(dividend, divisor) {
    const INT_MIN = -(2 ** 31);
    const INT_MAX = (2 ** 31) - 1;

    if (divisor === 0) return INT_MAX; 
    if (dividend === INT_MIN && divisor === -1) return INT_MAX;
    
    let quotient = Math.trunc(dividend / divisor);

    return quotient;
};
