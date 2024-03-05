var lengthOfLongestSubstring = function(s) {
       
    let maxLength = 0;

    for(let i = 0; i<s.length; i++){
         let currLength = 0;
         let seenChar = new Set();
        for(let j =i; j<s.length; j++){
        const currChar = s[j];
        if(!seenChar.has(currChar)){
            seenChar.add(currChar);
            currLength++;
            maxLength = Math.max(maxLength,currLength);
            
        }else{
            break
        }
        }
    }
    return maxLength;
};