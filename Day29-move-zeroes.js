var moveZeroes = function(nums) {
    let nonZeroCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroCount] = nums[i];
            nonZeroCount++;
        }
    }

    for (let i = nonZeroCount; i < nums.length; i++) {
        nums[i] = 0;
    }
};
