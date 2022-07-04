class queue{
    constructor(){
      this.s1 = [];
      this.s2 = [];
    }
  
  addQueue(x){
  
    while(this.s1.length != 0){
      this.s2.push(this.s1.pop());    
    }
    
    this.s1.push(x);
  
      while(this.s2.length != 0){
      this.s1.push(this.s2.pop());
    }
    return this.s1;
  }
  
  deQueue(){
  
    let x = this.s1.pop();
    return console.log(x);
  }
  }
  
  let q = new queue();
  
  console.log(q.addQueue(1));
  console.log(q.addQueue(2));
  console.log(q.addQueue(3));
  
  console.log(q.deQueue());
  console.log(q.deQueue());
  
  