  //                    *
//                 *   *
//            *   *   *
//        *   *   *   *
//   *   *   *   *   *


//i =1 
// j=1

// function printPp(n){
//   let s = ""

//     for(let i =0; i<n; i++){

//       for (let space = 1; space <= n - i; space++) {
//         s += " ";
//      }
//         for(let j=0; j<=i ; j++){
//         s+="*"
      
//                 } 
//         s+='\n'

//       }
//       return s
   
// }

// console.log(printPp(5))

// j=n
 // j=n-

/*

*****
****
***
**
*

*/

function printmtTringle (row){
  let patttern = ""
  for(let i = 0; i< row/2 ; i++){
  
    for(let space = 0; space < row/2 -i; space++ ){
       patttern += " "
    }
    for(let j =row/2; j <= i; j++){
      
      patttern += "*"
    }
  
  
    for(let space =row/2 +1 ; space <= row -i; space++ ){
      patttern += " "
   }
  
    patttern += "\n"
  }
  return patttern
}

console.log(printmtTringle(10))





