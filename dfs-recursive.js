class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const depthFirstValues = (root) => {
    if(root === null) return []
    const leftValues = depthFirstValues(root.left)
    const rightValues = depthFirstValues(root.right)

    return [root.val, ...leftValues, ...rightValues]

}
/*
          a
         /  \
        b     c
       / \     \
      d   e     f
 */
const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f

console.log(depthFirstValues(a)) //[ 'a', 'b', 'd', 'e', 'c', 'f' ]