var groupAnagrams = function (strs) {
  let map = new Map();
  for (items of strs) {
    let temp = [...items].sort().join("");
    if (map.has(temp)) map.get(temp).push(items);
    else map.set(temp, [items]);
  }
  return [...map.values()];
};
