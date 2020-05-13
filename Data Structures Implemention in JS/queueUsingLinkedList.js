class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  
  //Displays value of first element in the Queue
  peek() {
    if(this.first == null)
      return null;
    return this.first.value;
  }
  
  //Adds element to the end of the Queue
  enqueue(value){
  
    const newNode = new Node(value);
    if(this.first == null){
      this.first = newNode;
      this.last = newNode;
    }
    else{
    this.last.next=newNode;
    this.last = newNode;
    }
    this.length++;
    return this;
  }
  //Removes element from the start of the Queue
  dequeue(){
    if(this.first == null)
    {
      return null;
    }
    else{
      const holdingNode = this.first;
      this.first = holdingNode.next;
      this.length--;
      return this;
    }
  }
  //Returns True if Queue is empty
  isEmpty(){
    if(this.length == 0)
      return true;
    else
      return false;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
//myQueue.peek();
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();  //Returns Pavel since we dequeued Joy and then Matt
myQueue.dequeue();
myQueue.dequeue();
myQueue.isEmpty();//Returns True since we have dequeued everyone

//Queueing order

// (First)                          (Last)
//   Joy  <-- Matt  <--  Paven  <--  Samir
