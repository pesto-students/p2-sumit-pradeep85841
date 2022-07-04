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

  function levelOrder(root){
    let queue = [];
    queue.push(root);
    while(queue.length !== 0){
      let node = queue.shift();
      process.stdout.write(node.value.toString()+'');
      if(node.left){
        queue.push(node.left);
      }
      if(node.right){
        queue.push(node.right);
      }
    }
  }

let arr = [3,9,20,15,7];
root = createTree(arr);

levelOrder(root);