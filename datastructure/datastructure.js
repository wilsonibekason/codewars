const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

// map constructor
for (const [key, value] of map) {
  console.log("====================================");
  console.log(`${key}=${value}`);
  console.log("====================================");
}
map.delete("c");
console.log(map.has("a"));
console.log(map.size);
map.clear();

// STACK

class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();

console.log("Stack Object", stack.isEmpty());
console.log(stack.peek());
stack.pop();
stack.items;

//QUEUE

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(12);
console.log(queue.size());
queue.print();
queue.dequeue();

class NewQueue {
  constructor() {
    this.items = [];
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  isEmpty() {
    return this.rear - this.front === 0;
  }
  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }
  print() {
    console.log(this.items);
  }
}

const newQueue = new NewQueue();
newQueue.enqueue(20);
newQueue.enqueue(20);
newQueue.size();
newQueue.dequeue();

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLenght = 0; // keeps track of the number of element
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    this.currentLenght = this.capacity;
  }

  isEmpty() {
    return this.currentLenght === 0;
  }
  enqueue(item) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = item;
      this.currentLenght += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    this.isEmpty() && null;
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLenght -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is isEmpty");
    } else {
      let i;
      let string = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        string += String(this.items[1]);
      }
      string += this.items[1];
      console.log(string);
    }
  }
}

const circularQueue = new CircularQueue(20);

circularQueue.enqueue(20);
circularQueue.enqueue(20);
circularQueue.enqueue(20);
circularQueue.enqueue(20);
circularQueue.enqueue(20);

console.log(circularQueue.isFull());
