// 采用sort结合 Math 没有使用map

var longestConsecutive = function (nums) {
  let maxLength = 0;
  let count = 1;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let next = i + 1;
    // 这里nums[next]不会越界是因为 返回的是undefined
    if (nums[i] === nums[next]) continue;
    if (nums[next] - 1 === nums[i]) count++;
    else count = 1;
    maxLength = Math.max(maxLength, count);
  }
  return maxLength;
};
