var reverseOnlyLetters = function(s) {
    let i = 0;
    let j = s.length - 1;
    const letters = s.split('');

    const isLetter = char => /[a-zA-Z]/.test(char);

    while (i < j) {
        while (i < j && !isLetter(letters[i])) {
            i++;
        }
        while (i < j && !isLetter(letters[j])) {
            j--;
        }
        
        let temp = letters[i];
        letters[i] = letters[j];
        letters[j] = temp;
        i++;
        j--;
    }

    
    return letters.join('');
};
