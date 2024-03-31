var frequencySort = function(s) {
    const charFrequency = new Array(128).fill(0); 
    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i);
        charFrequency[charCode]++;
    }
    
    const sortedChars = s.split('').sort((a, b) => {
        const charCodeA = a.charCodeAt(0);
        const charCodeB = b.charCodeAt(0);
        return charFrequency[charCodeB] - charFrequency[charCodeA] || charCodeA - charCodeB;
    });
    
    return sortedChars.join('');
};
