var findPeakElement = function(nums) {
    

    for (let i = 0; i < nums.length; i++) {
        let isPeaked = true;

        for (let j = i+1; j < nums.length; j++) {
            if ( nums[i] < nums[j]) {
                isPeaked = false;
                break;
            }
        }

        if (isPeaked) {
            return i;
        }
    }

}
