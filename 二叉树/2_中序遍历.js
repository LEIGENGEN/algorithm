import tree from "./data.js";

function inOrder(tree) {
    if (!tree) return
    inOrder(tree.left)
    console.log(tree.value);
    inOrder(tree.right)
}

inOrder(tree)