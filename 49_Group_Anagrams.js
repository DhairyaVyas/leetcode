/**
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function(strs) {
    let result = [];
    let map = new Map();

    for (let i = 0; i < strs.length; i++) {
        const sorted = strs[i].split('').sort().join('');

        if (map.has(sorted)) {
            map.get(sorted).push(strs[i]);
        } else {
            map.set(sorted, [strs[i]]);
        }
    }

    for (let [key, value] of map) {
        result.push(value);
    }
    return result;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));