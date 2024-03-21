var sortedSquares = function(nums) {
    let squares = [];
    for(let i = 0;i<nums.length; i++){
         let square = nums[i] ** 2;
          squares.push(square);
          
    }
    // let sortedarr = squares.sort()
    // return sortedarr;
    return squares.sort(function(a, b){return a-b});
  
  
};
