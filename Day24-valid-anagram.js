var isAnagram = function(s, t) {
    let sChar = s.split('').sort().join();
    let tChar = t.split('').sort().join();
    if(sChar===tChar){
        return true;
    }
    return false;
    };

