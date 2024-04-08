var firstPalindrome = function(words) {
    let bool = true;
    let index = -1;
    for(let i=0;i<words.length;i++){
        if(words[i] === words[i].split('').reverse().join('')){
            bool = false;
            index = i;
            break;

        }
    }
    if(bool==true){
        return "";
    }else{
        return words[index];
    }
};
