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
  
  function preOrder(root){
    if(root != null){
    process.stdout.write(root.value.toString()+'');
    preOrder(root.left);
    preOrder(root.right);
    }
  }
  
  function postOrder(root){
    if(root != null){
    postOrder(root.left);
    postOrder(root.right);
    process.stdout.write(root.value.toString()+'');
    }
  }
  
  function inOrder(root){
    if(root != null){
      inOrder(root.left);
      process.stdout.write(root.value.toString()+'');
      inOrder(root.right);
    }
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
  
  function validateBT(root){
  
  let i = 0;
    while(i < arr.length){
      
     let l = 2*i+1;
     let r = 2*i+2;
  
      if(arr[l] > arr[i] || arr[r] < arr[0]){
        return false;
      }else{
        i++
      }
    }
    return true;
  }
  
  let arr = [213];
  root = createTree(arr);
  
  console.log(validateBT(root));