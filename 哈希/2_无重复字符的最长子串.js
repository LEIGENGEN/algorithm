// var lengthOfLongestSubstring = function (s) {
//     let map = new Map()
//     for (let i = 0; s.length; i++) {
//         if (map.has(s[i])) {
//             map.delete(s[i])
//         } else {
//             map.set(s[i], i)
//         }
//     }
//     return map.size
// };

var lengthOfLongestSubstring = function (s) {
    let l = 0
    let result = 0
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i]) && map.get(s[i]) >= l) {
            l = map.get(s[i]) + 1
        }
        result = Math.max(result, i - l + 1)
        map.set(s[i], i)
    }
    return result
}