const hasPathSum = function (root, targetSum) {
    if (!root) return false
    let result = false
    var dfs = (tree, sum) => {
        if (!tree.left && !tree.right && sum === targetSum) result = true
        if (tree.left) dfs(tree.val, sum + tree.left.val)
        if (tree.right) dfs(tree.val, sum + tree.right.val)
    }
    dfs(root, targetSum)
    return result
}