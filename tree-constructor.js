
/*
Have the function TreeConstructor(strArr) take the array of strings stored in strArr, which will contain pairs of integers in the following format: (i1,i2), where i1 represents a child node in a tree and the second integer i2 signifies that it is the parent of i1. For example: if strArr is ["(1,2)", "(2,4)", "(7,2)"], then this forms the following tree:

Input: ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]
Output: true
*/
function TreeConstructor(strArr) { 
    // Binary Tree
    // - A child has 1 parent
    // - A parent can have at most 2 children
    // - Root has no parent
  
    let children= {}
    let parents = {}
    for(let i=0; i<strArr.length; i++){
      let item_string = strArr[i]
      let parts = item_string.replace('(', '').replace(')', '').split(',')
      let child = parts[0]
      let parent = parts[1]
  
  
  // - A parent can have at most 2 children
      children[parent] = (children[parent] || 0) + 1
      if(children[parent] > 2) return false
      
       // - A child has 1 parent
      parents[child] = (parents[child] || 0) + 1
      if(parents[child] > 1) return false
  
    }
   // only one node should not have a parent.
    let rootCount = 0
  
    for(key in children){ // we have only one parent is not a child
      if(!(key in parents)) rootCount++
    }
  
    return rootCount > 1 ? false : true
  
  }