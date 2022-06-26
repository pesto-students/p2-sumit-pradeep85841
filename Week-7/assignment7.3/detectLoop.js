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

function detectLoop()
{
    let slow = head, fast = head;
      
    while (slow != null && fast != null && 
           fast.next != null)
    {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast)
        {
          return console.log(true);
        }else {
          return console.log(false);
        }
    }
}

let array = [1,2,3,4,5];

createSll(array);
detectLoop();