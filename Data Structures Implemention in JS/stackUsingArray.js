class Stack {

  constructor(){
    this.array = [];
  }
  peek() {
    return this.array[this.array.length-1];
  }
  push(value){
    this.array.push(value);
    return this;
  }
  pop(){
    this.array.pop();
    return this;
  }
  isEmpty()
  {
    if( this.array.length == 0)
      return true;
    else
      return false;
  }
}

const myStack = new Stack();
myStack.peek();
myStack.push('Github');
myStack.push('BitBucket');
myStack.push('GitLab');
myStack.push('AWS CodeCommit');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.isEmpty();


//Stack
  //AWS CodeCommit
  //GitLab
  //BitBucket
  //Github
