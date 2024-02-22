function twoSum(nums, target) {
    let numObj = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let matchNum = target - num;
                


        if (numObj.hasOwnProperty(matchNum)) {
            return [numObj[matchNum], i];
        }
        numObj[num] = i;
    }

    return [];
}
let nums1 = [2, 7, 11, 15];
let target1 = 9;
console.log(twoSum(nums1, target1));
