// var addDigits = function(num) {
//     let sum = 0;
//     let inString = num.toString().split('').map(Number);
//     for(let i=0;i<inString.length;i++){
//          sum+=inString[i];
//     }
//          if(sum > 9){
//             let temp =0;
//             let isString = sum.toString().split('').map(Number);
//     for(let j=0;j<isString.length;j++){
//          temp+=isString[j];
//          }
//          return temp;
//     }
    
//     else{
//         return sum;
//     }
    
    


// };

var addDigits = function(num) {
    let sum = num;
    
    while (sum > 9) {
        let temp = 0;
        let inString = sum.toString().split('').map(Number);
        
        for (let i = 0; i < inString.length; i++) {
             temp += inString[i];
        }
        
        sum = temp;
    }
    
    return sum;
};
