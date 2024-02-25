// var plusOne = function(digits) {
//   let convertToString = digits.toString();
//   let convertToNum = parseInt(convertToString);
//   let addOne = convertToNum + 1;
//   return addOne;
// };
// let digits = [1, 2, 3];
// // let result = plusOne(digits);
// console.log(addOne);  

var plusOne = function(digits) {
    let stringValue = digits.join('');
  
    let intValue = BigInt(stringValue);
  
    
    let incrementedValue = intValue + 1n;
    let resultArray = Array.from(incrementedValue.toString(), Number);
  
    return resultArray;
  };
  
