var merge = function (intervals) {
  let res = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let first = intervals[0];
  for (let current of intervals) {
    console.log(current);
    if (first[1] >= current[0]) {
      first[1] = Math.max(first[1], current[1]);
      res.push(first);
    } else {
      first = current;
    }
  }
  res.push(first);
  return res;
};

merge([1, 3], [2, 6], [15, 18], [8, 10]);
