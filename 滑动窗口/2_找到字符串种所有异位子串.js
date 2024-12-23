var findAnagrams = function (s, p) {
  let cntP = new Array(26).fill(0)
  let cntS = new Array(26).fill(0)
  for (const c of p) {
    cntP[c.charCodeAt() - 'a'.charCodeAt()]++
  }
  let result = []
  for (let right = 0; right < s.length; right++) {
    cntS[s[right].charCodeAt() - 'a'.charCodeAt()]++
    let left = right - p.length + 1
    if (left < 0) continue
    if (isEqual(cntP, cntS)) result.push(left)
    // if (isEqual(cntP, cntS)) result.push(right)
    cntS[s[left].charCodeAt() - 'a'.charCodeAt()]--
  }
  return result

  function isEqual(list1, list2) {
    if (list1.length !== list2.length) return false
    for (let i = 0; i < list2.length; i++) {
      if (list1[i] !== list2[i]) return false
    }
    return true
  }
};
console.log(
  findAnagrams("cbaebabacd", "abc"));
