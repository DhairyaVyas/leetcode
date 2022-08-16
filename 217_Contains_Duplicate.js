/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function(nums) {
    let numsObj = nums.reduce((a, b) => (a[b] = 1, a), {});
    return nums.length !== Object.keys(numsObj).length;
};

console.log(containsDuplicate([1,2,3,4]))