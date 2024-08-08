
// QUEUE DS

/*
 queue folow FIFO
 enQueue() : push an element or append an elements
 deQueue(): remove an element from 0 index
 getSize(): tells size of an queue
 peek(): tell first element 
 isEmpty(): check empty or not

*/

// implementaion throght Array

class queue {
    constructor(){

        this.array = [];

    }
    enQueue(data){
      this.array.push(data)
    }
    deQueue(){
     return this.array.shift()
    }
    peek(){
        if(this.array.length ==0) return null
       return this.array[0]
    }
    getSize(){
     return this.array.length

    }
    isEmpty(){
    return this.getSize() ==0
    }

}


const myqueue = new queue()


// myqueue.enQueue(3)
// myqueue.enQueue(5)
// myqueue.enQueue(6)
// myqueue.enQueue(7)
// myqueue.enQueue(7)


// myqueue.deQueue()
// myqueue.deQueue()
// myqueue.deQueue()
// myqueue.deQueue()

// console.log(myqueue.getSize())
// myqueue.getSize()
// console.log(myqueue.isEmpty())
// console.log(myqueue)



// Queue implementation using Linked list

class Node {
  constructor(data){
    this.data = data,
    this.next = null
  }
}

class ListList {
  constructor(){
    this.head = null
    this.size = 0
  }

  // we know that in queue we can add data from one end and remove data from other end
  // it's mean here we add a data from at position first and remve data at position last

  // add data
  enQueue(data){
    
    let newNode = new Node(data) 
    newNode.next =this.head
    this.head = newNode
    this.size ++
  }

  // remove data from queue
  deQueue(){ 
    let currentNode = this.head
    if(this.size ===0){
      return 'List is empty'
    }
    if(this.size ==1){
      this.size--
      return this.head = null

    }

    for(let i = 1; i<this.size-1; i++){
      currentNode = currentNode.next
     
    }
  
    currentNode.next = null
    this.size--
  
  }


  // getSize
  getSize(){
    return this.size
  }

  // peek()
    peek(){
      let counter = 1
      let currentNode = this.head
      while(counter <this.size){
        currentNode = currentNode.next
        counter++
      }
      return currentNode

  }

  // isEmpty()

  isEmpty(){
  return this.size ==0
  }
  
}


let list = new ListList()
list.enQueue(45)
list.enQueue(50)
list.enQueue(60)

list.deQueue()
list.deQueue()
list.deQueue()



console.log(list.getSize()) 
console.log(list.peek())
console.log(list.isEmpty())

console.log(list)



