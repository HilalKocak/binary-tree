class Node{ 
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
//dfs
const treeMinValueWithDfs = (root) => {
    let smallest = Infinity
    const stack = [root];
    while(stack.length>0){
        const current = stack.pop()
        if(current.val < smallest){
            smallest = current.val
        }

        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right);

    }

    return smallest
}


//bfs
const treeMinValueWithBfs = (root) => {
    let smallest = Infinity
    const queue = [root];
    while(queue.length>0){
        const current = queue.shift()
        if(current.val < smallest){
            smallest = current.val
        }

        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);

    }

    return smallest
}

//dfs recursive
const treeMinValueWithDfsRecursive = (root) => {
    if(root === null) return Infinity

    const leftMin= treeMinValueWithDfsRecursive(root.left)
    const rightMin = treeMinValueWithDfsRecursive(root.right)
    
    return Math.min(leftMin, rightMin, root.val)
}


/*
          a
         /  \
        b     c
       / \     \
      d   e     f
 */
const a = new Node(3)
const b = new Node(11)
const c = new Node(4)
const d = new Node(-4)
const e = new Node(-2)
const f = new Node(1)

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f

console.log(treeMinValueWithDfs(a))
console.log(treeMinValueWithBfs(a))
console.log(treeMinValueWithDfsRecursive(a))