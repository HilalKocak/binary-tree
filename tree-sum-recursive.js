class Node{ 
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
//DFS
const treeSum = (root) => {
    if(root === null) return 0

    return root.val + treeSum(root.left) + treeSum(root.right)
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
const d = new Node(4)
const e = new Node(-2)
const f = new Node(1)

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f

console.log(treeSum(a)) //21