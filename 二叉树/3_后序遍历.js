import tree from "./data.js";

function lastOrder(tree){
    if(!tree) return
    lastOrder(tree.left)
    lastOrder(tree.right)
    console.log(tree.value);
}

lastOrder(tree)