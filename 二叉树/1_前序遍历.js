// import './data.js'
import tree from './data.js'
// const tree = require('./data')

function preOrder(tree) {
    if (!tree) return // 如果没有要返回
    console.log(tree.value);
    preOrder(tree.left)
    preOrder(tree.right)
}

// console.log(tree);
preOrder(tree)