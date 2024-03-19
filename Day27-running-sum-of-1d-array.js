var runningSum = function(nums) {
    let arr = [];
    let sum = 0
    for(let i= 0; i<nums.length; i++){
        // for(let j= i+1;j<nums.length; j++){
            sum += nums[i]
            arr.push(sum);
        }
         return arr
    };
