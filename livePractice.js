

// 1. linklist Implementation

/*
 linklist is a linear ds
 it is used for dynamics memory location
node - data, next(address of next node)
 operation
 - create Node
 - insert ----> insert at first postion, insert at middle of linklist, insert at last position
 - delete ---->delete at first postion, delete at middle of linklist, delete at last position
 - display
 - isEmpty
 - size

*/

// creation of Node
class Node {
    constructor(data){
      this.data = data
      this.next = null
     
    }
}

class Linklist {

    constructor(data) {
        // this.data = data
        this.head = null
        this.size = 0
    }

    // insertAtfirst
    insertAtfirst(data){
        
        let newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
        this.size++

    }

    // insertAtbetweent
    insertAtbetweent(data,index){
        
        if(index < 0 || index > this.size) return 'Not Valid'

        if(index ==0){
            this.insertAtfirst(data)
            return
        }


            let counter = 1
            let currentNode = this.head
            while(counter < index){
                currentNode = currentNode.next
               counter++

            }
            let newNode = new Node(data)
            newNode.next = currentNode.next
            currentNode.next = newNode
            this.size++
    
     
       
    }

    // insertAtLast

    insertAtLast(data){
      
        if(this.size ===0){
            this.insertAtfirst(data)
            return
        }
       let c = 1
       let currentNode = this.head
        while(c < this.size){
            currentNode = currentNode.next
            c++
        }

        let newNode = new Node(data)
        currentNode.next = newNode
        this.size++
    }

    // deleteAtfirst 
    deleteAtfirst(){

       this.head = this.head.next
       this.size--
    }

    // deleteAtBetween

    deleteAtBetween(index){

        if(index < 0 || index >= this.size){
            return 'invalid'
        }

        if(index ==0){
          return this.deleteAtfirst()
    
        }

        let counter = 1
        let currentNode = this.head
        if(counter < index){
            currentNode = currentNode.next
            counter++
        }

        let nextNode = currentNode.next.next
         currentNode.next = nextNode
         this.size--
    }

    // ddeleteAtLast
    deleteAtLast(){

        let counter = 1
        let currentNode = this.head
        if(counter < this.size){
            currentNode = currentNode.next
            counter++
        }

       
         currentNode.next = null
         this.size--
    }

}

let list = new Linklist()

// list.insertAtfirst(20)
// list.insertAtfirst(30)
// list.insertAtfirst(40)
// list.insertAtbetweent(100,3)
list.insertAtLast(500)
list.insertAtLast(600)
list.insertAtLast(700)
// list.deleteAtBetween(4)
list.deleteAtLast()






console.log(list)


