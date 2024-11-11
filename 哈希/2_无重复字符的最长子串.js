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
  let l = 0;
  let result = 0;
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) >= l) {
      // map.get(s[i]) >= l 确保上一次出现的索引在l的左边，满足就是说明当前窗口内有重复字符
      l = map.get(s[i]) + 1;
    }
    result = Math.max(result, i - l + 1);
    // i - l 是不断变化，获取当前最新的长度
    map.set(s[i], i);
  }
  return result;
};
