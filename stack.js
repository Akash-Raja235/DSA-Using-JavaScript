
// Stack implementation using Array 

/* 
stack have 5 major operation 
push()
pop()
peak - last elemnts
isSize() - array length
isEmpty() - check array is empty or not
*/


class Stack {
    constructor(){
        this.array = [];
        // this.currentSise = this.array.length
        // this.max = 5
    }

    push(data){
      return this.array.push(data)

    //  if(this.currentSise <= this.max){
    //     this.array[this.currentSise] = data
    //     this.currentSise += 1;
    //  }else{
    //     alert("Stack is overflow")

    //  }
    }

    pop(){
       return this.array.pop()
    //   if(this.currentSise > 0){
    //     this.currentSise -=1
    //     this.array.length= this.currentSise
    //   }else{
    //     alert("stack is empty")
    //   }
       

    }
    peek(){
       if(this.array.length ==0) return null
        return this.array[this.array.length -1]
    }

    getSize(){
        return this.array.length
    }

    isEmpty(){
        return this.getSize() == 0
    }


}


// const myStack = new Stack()
// myStack.push('toyoto')
// myStack.push('mazda')
// myStack.push('audi')
// myStack.push('lambo')

// console.log(myStack)
// console.log(myStack.pop())
// console.log(myStack.pop())
// // console.log(myStack.pop())
// // console.log(myStack.pop())
// console.log(myStack)
// console.log(myStack.getSize())
// console.log(myStack.isEmpty())



// Qs. Stack  Implementaion  using Linked list

  
// class Node {
//     constructor(data){
//         this.value= data
//         this.next = null
//     }
// }

class LinkedList {
    constructor(){
        this.head=null
        this.size = 0;
    }

  // insert new node in linked list - at first position
   //2-->3---->null

    insertAtFirst(newdata){
        let newNode = {
            value:newdata,
            next:null
        }
        newNode.next = this.head
        this.head = newNode
        this.size +=1
    }


    deleteAtfirst(){
        this.head=this.head.next
        this.size -=1
    }

    firstNode(){
      return  this.head.value
    }

    getSize(){
     return  this.size
    }

    isEmpty(){
     return this.size ===0
    }

}


class StackWithLinkedlist {

    constructor(){
        this.list = new LinkedList()
    }

    push(data){
        this.list.insertAtFirst(data)
    }

   pop(){
   return  this.list.deleteAtfirst()
    }

   peek(){
   return  this.list.firstNode()
    }

    getSize(){
      return  this.list.getSize()
    }
}


const mystacklinsted = new StackWithLinkedlist()

// mystacklinsted.push(3)
// mystacklinsted.push(20)
// mystacklinsted.push(50)
// mystacklinsted.push(500)

// mystacklinsted.push(80)
// mystacklinsted.push(100)

// mystacklinsted.pop()
// mystacklinsted.pop()
// mystacklinsted.pop()

// console.log(mystacklinsted.peek())
// console.log(mystacklinsted.getSize())


// console.log(mystacklinsted)




// Qs. Implement stack using 2 queues -------------


   class StackwithQueue{
    constructor(){
      this.q1 = [];
      this.q2 = [];
    }

    push(item){
            this.q2.push(item)
     
            while(this.q1.length !=0){
                this.q2.push(this.q1[0])
                this.q1.shift()
            }
               
         

                 
               let q = this.q1
               this.q1 = this.q2
               this.q2 = q


    }
    pop(){

        return this.q1.shift()

    }
    peek(){
    return this.q1[0]
    }
    getSize(){
     return this.q1.length
    }

    isEmpty(){
      return this.getSize() ==0
    }
   }


   const mystackwithqueue = new StackwithQueue()

   mystackwithqueue.push(23)
   mystackwithqueue.push(24)
   mystackwithqueue.push(25)
   mystackwithqueue.pop()
   mystackwithqueue.pop()
   mystackwithqueue.pop()
   console.log(mystackwithqueue.getSize())
   console.log(mystackwithqueue.isEmpty())
   


 

   

   


   

   console.log(mystackwithqueue)
