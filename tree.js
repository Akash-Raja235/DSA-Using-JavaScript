/* 
Tree DS

*/

class Node {
    constructor(val){
        this.value = val;
        this.left= null;
        this.right = null
    }
}

class BSTtree {
    constructor(){
      this.root = null  
    }


    isTreeEmpty(){
        return this.root === null
    }
}


let bst = new BSTtree()

console.log(bst.isTreeEmpty())
