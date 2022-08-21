/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
let topKFrequent = function (nums, k) {
    let countMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!countMap[nums[i]]) {
            countMap[nums[i]] = 0;
        }
        countMap[nums[i]]++;
    }

    let result = Object.keys(countMap).sort(function (a, b) {
        return countMap[b] - countMap[a]
    })
    result.length = 2;
    return result;
}


let topKFrequent2 = function (nums, k) {
    let map = {};
    let res = [];
    let bucket = Array.from({length: nums.length + 1}, () => []);

    for (const n of nums) {
        map[n] = (n in map) ? 1 + map[n] : 1;
    }

    for (const c in map) {
        bucket[map[c]].push(c);
    }

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i].length > 0) {
            bucket[i].forEach((elem) => res.push(elem));
            if (k === res.length) {
                return res;
            }
        }
    }
}

console.log(topKFrequent([2, 5, 5, 5, 6, 6, 7], 2));