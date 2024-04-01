const allTreePaths = (root) => {
    if(root === null) return []
    if(root.left === null && root.right === null) return [[root.val]]
    //      a
  //    /   \
  //   b     c
  //  / \     \
  // d   e     f
    const paths = []
    
      
      // [
    //   [a,b,d],
    //   [a,b,e]
    //   [a,c,f]
    // ]
    const leftSubPaths = allTreePaths(root.left)
    // [
    //   [b,d],
    //   [b,e]
    // ]
    
    for(let subPath of leftSubPaths){
      paths.push([ root.val, ...subPath])
    }
    
      // [
    //   [a,b,d],
    //   [a,b,e]
    // ]
    
    const rightSubPaths = allTreePaths(root.right)
    // [
    //   [c,f]
    // ]
      for(let subPath of rightSubPaths){
      paths.push([ root.val, ...subPath])
    }
    // [
    //   [a,c,f]
    // ]
    return paths
  };

  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  const d = new Node('d');
  const e = new Node('e');
  const f = new Node('f');
  
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  
  //      a
  //    /   \
  //   b     c
  //  / \     \
  // d   e     f
  
console.log(allTreePaths(a)) // ->
  // [ 
  //   [ 'a', 'b', 'd' ], 
  //   [ 'a', 'b', 'e' ], 
  //   [ 'a', 'c', 'f' ] 
  // ] 