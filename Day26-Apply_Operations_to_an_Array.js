var applyOperations = function(nums) {
   const n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }
    return nums.filter(num => num !== 0).concat(Array(nums.filter(num => num === 0).length).fill(0));

 
};
