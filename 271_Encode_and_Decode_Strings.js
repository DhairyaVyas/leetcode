// Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.
//
//     Machine 1 (sender) has the function:
//
//     string encode(vector strs) {
//     // ... your code
//     return encoded_string;
// }
// Machine 2 (receiver) has the function:
//     vector decode(string s) {
//     //... your code
//     return strs;
// }
// So Machine 1 does:
//
//     string encoded_string = encode(strs);
// and Machine 2 does:
//
//     vector strs2 = decode(encoded_string);
// strs2 in Machine 2 should be the same as strs in Machine 1.
//
// Implement the encode and decode methods.
//
//     Note:
// The string may contain any possible characters out of 256 valid ascii characters. Your algorithm should be generalized enough to work on any possible characters.
//     Do not use class member/global/static variables to store states. Your encode and decode algorithms should be stateless.
//     Do not rely on any library method such as eval or serialize methods. You should implement your own encode/decode algorithm.

function encode(strs) {
    return strs.map((str) => `${str.length}#${str}`).join('');
}

function decode(str) {
    const res = [];
    let i = 0;

    while (i < str.length) {
        let j = i;
        while (str[j] !== '#') {
            ++j;
        }

        const len = Number(str.slice(i, j));
        res.push(str.slice(++j, j + len));
        i = j + len;
    }

    return res;
}
let str1 = encode(["sad", "3#fij"])
console.log(str1);
let str2 = decode(str1);
console.log(str2)