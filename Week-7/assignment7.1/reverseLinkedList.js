class sllNode
  {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }

let head = null;

function createSll(array){
  head = new sllNode(array[0]);
  let curr = head;
  for(let i = 1; i<array.length; ++i){
    curr.next = new sllNode(array[i]);
    curr = curr.next;
  }
}

function traverseSLL(){
  let curr = head;
  while(curr !== null){
    console.log(curr.value);
    curr = curr.next;
  }
}

function reverseSLL(){
  let prev = null, curr = head, after = null;
  while(curr.next !== null){
    after =curr.next;
    curr.next = prev;
    prev = curr;
    curr = after;
  }
  curr.next = prev;
  head = curr;
}

let array = [1,2,3,4,5];

createSll(array);
reverseSLL();
traverseSLL();