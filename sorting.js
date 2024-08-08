
/*
Sorting Alorithm
1. Insertion sort

*/


// const insersionSort =(arr)=>{
// //1 0,45
//     // blutforce btechnique
//       let newArr = arr
//     // for(let i = 0; i< newArr.length; i++){

//     //     for(let j=0; j<newArr.length+1; j++){

//     //         if(newArr[i] < newArr[j]){
//     //             let temp = newArr[j];
//     //             newArr[j] = newArr[i]
//     //             newArr[i] = temp
//     //         }
//     //     }
        
//     // }


     
    
// return newArr
// }

// console.log(insersionSort([45,1,0,8,46,45,100]))


function reverseString (str){
  
 let arr = []
 for(let i =0; i<str.length; i++){
   arr[i] = str[i]
 }
 
 let key = []
 let pointer = 0
 for(let i = arr.length-1 ; i >=  0; i-- ){
  key[pointer] = arr[i]
  pointer++
  }
  return key

  fn= O(n)
 
}

console.log(reverseString("akash"))


