var isPalindrome = function(x) {
    let z=x;
    let sum =0;
    // let b
    while(x>0){
    let a=x%10
    sum=sum*10+a;
    x=parseInt(x/10);
    }
    return z===sum;
        
    
};
