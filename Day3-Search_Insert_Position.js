var searchInsert = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            return i;
        }
        else if 
            (nums[i]>target){
                nums.splice(i,0,target)
                return i;
            

        }
    }
    
    nums.push(target)
    return nums.length-1;
    

};
