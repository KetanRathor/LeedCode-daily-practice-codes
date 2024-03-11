var numberGame = function(nums) {
    nums.sort(function(a,b)
    {return a-b});
    for(let i=0;i<nums.length-1;i+=2){
        let temp = nums[i]
        nums[i]= nums[i+1]
        nums[i+1]=temp
    }
    return  nums
};
