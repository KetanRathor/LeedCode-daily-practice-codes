// var isPalindrome = function(s) {
//     for (let i = 0; i < s.length; i++) {
//         const char = s[i].toLowerCase();
        
//     // Check if the cleaned string is a palindrome
//     return char === char.split('').reverse().join('');
//     }

// };

var isPalindrome = function(s) {
    const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    return cleanedString === cleanedString.split('').reverse().join('');
    };
