var findDuplicate = function(nums) {
    let numsSort=nums.sort();
    for(let i=0;i<numsSort.length; i++){
        if(numsSort[i]===numsSort[i+1]){
            return numsSort[i];
        }
        
    }
};
