class treeNode{
    constructor(val){
      this.value = val;
      this. left = null;
      this.right = null;
    }
  }
  
  function insertIntoTree(i,arr){
    let curr = null;
    if(i < arr.length){
      curr = new treeNode(arr[i]);
      curr.left = insertIntoTree(2*i+1,arr);
      curr.right = insertIntoTree(2*i+2,arr);
    }
    return curr;
  }
  
  function createTree(arr){
    return insertIntoTree(0,arr);
  }

  function depth(root){
    if (root === null){
      return 0;
    }else{
    let leftdepth = depth(root.left);
    let rightdepth = depth(root.right);
    
    if(leftdepth > rightdepth){
      return leftdepth+1;
    }else{
      return rightdepth+1;
    }
  }
  }

let arr = [1,null,2];
root = createTree(arr);

console.log(depth(root));