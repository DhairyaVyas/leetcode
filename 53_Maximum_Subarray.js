/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function(nums) {
    let maxSum = -Infinity
    let currentSum = 0
    // iterate through the nums, store sub-problems result
    for(let i = 0; i < nums.length; i++){
        currentSum = Math.max(nums[i], currentSum + nums[i]) // get current sum
        maxSum = Math.max(currentSum, maxSum) // check with last sum, which ever is bigger return value

    }
    return maxSum
};

console.log(maxSubArray([5,4,-1,7,8]));