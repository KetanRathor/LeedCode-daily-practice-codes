var findTheDifference = function(s, t) {

    let charCodeSumS = 0;

    let charCodeSumT = 0;

    for (let i = 0; i < s.length; i++) {

        charCodeSumS += s.charCodeAt(i);

    }

    for (let i = 0; i < t.length; i++) {

        charCodeSumT += t.charCodeAt(i);

    }

return String.fromCharCode(charCodeSumT -charCodeSumS);

};
