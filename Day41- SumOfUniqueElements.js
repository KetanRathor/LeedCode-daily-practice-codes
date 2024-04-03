
var sumOfUnique = function(nums) {
    let arr=[]
    for(let i=0;i<nums.length; i++){
        let isUnique=true;
        for(let j=0; j<nums.length;j++){
            if(i!==j&&nums[i]===nums[j]){
                isUnique=false;
                break;
            
            }
        }
        if(isUnique){
            arr.push(nums[i])
        }

            
        }
    let sum =0;
    for(let k =0; k<arr.length; k++){
        sum+=arr[k]
    }
    return sum
}
