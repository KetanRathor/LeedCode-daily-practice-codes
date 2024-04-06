var reverseVowels = function(s) {
  const vowels = new Set(['a','e','i','o', 'u', 'A', 'E', 'I', 'O', 'U']);
    s = s.split('');
    let i = 0;
    let j = s.length - 1;
    
    while (i < j) {
        if (vowels.has(s[i]) && vowels.has(s[j])) {
            [s[i], s[j]] = [s[j], s[i]]; // Swap vowels
            i++;
            j--;
        } else if (vowels.has(s[i])) {
            j--;
        } else if (vowels.has(s[j])) {
            i++;
        } else {
            i++;
            j--;
        }
    }
    
    return s.join('');
};
