var removeDuplicates = function(nums) {
    uniqueSet = new Set()
    for(let i = 0; i<nums.length; i++){
        uniqueSet.add(nums[i])
    }
    const uniqueArray = Array.from(uniqueSet);
    for(let i = 0; i<uniqueArray.length; i++){
        nums[i] = uniqueArray[i]
    }
    return uniqueArray.length;
};
