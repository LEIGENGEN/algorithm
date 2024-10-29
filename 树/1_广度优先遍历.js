const tree = {
    id: 1,
    parentId: null,
    name: "root1",
    children: [
        {
            id: 2,
            parentId: 1,
            name: "child1",
            children: [
                {
                    id: 4,
                    parentId: 2,
                    name: "grandchild1",
                    children: []
                }
            ]
        },
        {
            id: 3,
            parentId: 1,
            name: "child2",
            children: [
                {
                    id: 5,
                    parentId: 3,
                    name: "grandchild2",
                    children: []
                }
            ]
        }
    ]
}

// const dfs = ((child) => {
//     const queue = [child] //变为数组，然后可以使用数组的方式
//     while (queue.length > 0) {
//         const n = queue.shift() //shift会返回修改后的数组
//         console.log(n.name);
//         n.children.forEach(element => queue.push(element))//这里是将每一个子节点都加入到这个队列中，所以就不用担心第一个整体推出了之后，无法打印后续的字段
//     }
// })

// =====================================================10.27=======================================================
// const dfs_ = (tree) => {
//     const queue = [tree]
//     console.log(tree.name);
//     const n = queue.unshift
//     tree.children.forEach(child => {
//         n.push(child)
//         dfs_
//     })
// }

// const dfs = (tree) => {
//     let queue = [tree]
//     while (queue.length > 0) {
//         console.log(queue.name);
//         let n = queue.shift
//         if (n.children) n.children.forEach(item => {
//             queue.push(item)
//             dfs(item)
//         })
//     }
// }
// dfs(tree)

// =====================================================10.29=======================================================
// const dfs = (tree) => {
//     const queue = [tree]
//     while (queue.length > 0) {
//         let n = queue.shift()
//         if (n.children) {
//             console.log(n.name);
//             queue.push(n.children)
//         }
//     }
// }

dfs(tree)

