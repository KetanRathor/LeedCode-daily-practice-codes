var singleNumber = function(nums) {
    let n = nums.length;
    if(n === 1){
        return nums[0];
    }
    else{
    for(let i = 0; i<n; i++){
        let foundDuplicate = false;
        for(let j = 0; j<n; j++){
            if(i!==j && nums[i]===nums[j]){
                foundDuplicate = true;
                break;
            
            }
        }
        if(!foundDuplicate)
        return nums[i]
    }
    return nums[n - 1];
}

}
