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


var dfs = ((child) => {
    console.log(child.name);
    if (child.children) child.children.forEach(element => dfs(element));
})

// =====================================================10.27=======================================================
// const dfs = (tree) => {
//     console.log(tree.name);
//     tree.children.forEach(element => dfs(element));
// }

// =====================================================10.29=======================================================
// const dfs_ = (tree) => {
//     // if (!tree.children) return
//     console.log(tree.name);
//     if (tree.children) tree.children.forEach(item => dfs_(item))
// }

// dfs_(tree)

dfs(tree)
