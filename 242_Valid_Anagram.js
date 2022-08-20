/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let sObj = {}, tObj = {};

    for (let i = 0; i < s.length; i++) {
        if (sObj[s[i]]) {
            sObj[s[i]]++;
        } else {
            sObj[s[i]] = 1;
        }
        if (tObj[t[i]]) {
            tObj[t[i]]++;
        } else {
            tObj[t[i]] = 1;
        }
    }

    for (let j in sObj) {
        if (sObj[j] !== tObj[j]) {
            return false;
        }
    }
    return true;
};

let s = "rat", t = "car";
console.log(isAnagram(s, t));