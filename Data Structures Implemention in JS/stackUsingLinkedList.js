class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {

  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  
  peek() {
    return this.top;
  }
  
  push(value){
   const newNode = new Node(value);

   if(this.length === 0){
     this.top = newNode;
     this.bottom = newNode;
     
   }
   else{
     const holdingNode = this.top;
     this.top = newNode;
     this.top.next = holdingNode;
   }
   
    this.length++;
    return this;
  }
  pop(){
    if( !this.top){
      return null;
    }

    if( this.top === this.bottom){
      this.bottom = null;
    }

    this.top = this.top.next
    this.length--;
    return this;
  }
  //isEmpty
  isEmpty(){
    if(this.top != null)
    {
      return false
    }
    else if(this.length == 0){
      return true
    }
    else{
      return true
    }
  }
}

const myStack = new Stack();
myStack.push("Github");
myStack.push("Bitbucket");
myStack.push("Gitlab");
myStack.push("AWS CodeCommit");
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.isEmpty();

//Stack
  //Github
  //Bitbucket
  //Gitlab
  //AWS CodeCommit
