
// linked list creation


/* value = data, next = adreses of next node, head = first node, tail = last node  */


class List {
    constructor(data){
         this.head={
            value :data,
            next:null,
         }

         this.tail = this.head
         this.size =1
    } 

// creation of node
    createNewNode(newValue){
        // console.log('kkkkkkkkkkkk')
      let newNode ={
            value:newValue,
            next:null
        }
        this.tail.next = newNode
        this.tail = newNode

         this.size +=1
         console.log(this.size)
    }

    // insersion linked list 
    /* 
      1<2
    */
    inserionNewNode(index,value){

        if(index < 0 || index > this.size+1){
            console.log('invalid')
            return "invalid input"
           
        }

        let counter = 1;
         let currentNode = this.head
        if(index ===1){
            let newNode ={
                value:value,
                next:null
            }
            // newNode = {
            //     value:value,
            //     next:null
            // }
            newNode.next = this.head
            this.head = newNode
          this.size += 1


        }else{
            
            console.log('ppppppppp')
             while(counter != index -1){
                 currentNode = currentNode.next
                 counter ++    
             }
             
             let newNode = {
                value:value,
                next:null
            }
            let nextNode = currentNode.next
            currentNode.next = newNode
            newNode.next = nextNode
            // currentNode.next= {
        //     value:value,
        //     next:nextNode
        // }
        this.size +=1
        }
       
       
    
    }

    // deletion of LinkedLIst


    delete(index){

        if(index <0 || index > this.size){
            return 
        }
      
        let counter =1
        let currentNode = this.head
        if(index ===1){
            this.head = this.head.next
            this.size -=1
        }else{

            while(counter != index-1){
                
                currentNode = currentNode.next
                counter++
            }

            let nextNode = currentNode.next.next
            currentNode.next = nextNode
            this.size -=1

        }
    }

    // traversal of linked list
    trvesal(){
    let counter = 1;
    let currentNode = this.head
    while(counter <= this.size){
        
        console.log(currentNode)
        currentNode= currentNode.next
       
       
        counter ++
    }
   
  }

  // search a elements in in linkedlist
  searchLinked(value){

    let counter = 1;
    let currentNode = this.head
   let result=null
    while(counter <= this.size){
        if(currentNode.value === value)
            {
              result = counter
                
            }
        currentNode = currentNode.next
        counter ++

    }
    if(result == null){
        console.log('no any element found')

    }else{
        console.log("result",result)
    }
  
  }
      
}

// let list = new List(200)
// list.createNewNode(300)
// list.createNewNode(400)
// list.createNewNode(500)
// list.createNewNode(600)

// list.inserionNewNode(6,1800)
// list.inserionNewNode(5,1000)
// list.inserionNewNode(7,1200)
// list.inserionNewNode(1,100)
// list.inserionNewNode(1,50)
// list.deletionLinked(2)
// list.insert(7,800)
// list.delete(6)
// list.trvesal()
// list.searchLinked(800)
// console.log(list)



class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(data){
        this.head = null
        this.size = 0
    }

    // insert new node at 1sh position or head postion

    insertAtHead(data){

        let newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
        this.size += 1
    }

    // insert node at middle of linked list 

    inserAt(index, data){
      
        if(index < 0 || index > this.size ){
            return 'invalid List'
        }

        if(index == 0){
            this.insertAtHead(data)
            return
        }

        let counter = 0
        let currentNode = this.head
        while(counter < index ){
            currentNode = currentNode.next
            counter ++
        }

        let newNode = new Node(data)
        newNode.next = currentNode.next
        currentNode.next = newNode
    
        this.size +=1

    }
}

  let list = new LinkedList()
  list.insertAtHead(45)
  list.insertAtHead(50)
  list.insertAtHead(56)
  list.insertAtHead(57)
  
  list.inserAt(3,58)





    console.log(list)