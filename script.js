
// let's start coding journey

// sum of 1 to 5 naturak number 

// function sumofNaturakNum(n){

//     let sum =0
//     for(let i=1; i<= n ; i++){

//          sum += i
//     }
    
//     return sum  

// }

// console.log(sumofNaturakNum(10))

// sum of digits of a number

// function sumofDigitsNumber (num){
//   let sum = 0
//     while(num > 0){
//     sum += num % 10
//     num= Math.floor(num/10)
//     }
//     return sum
// }
// console.log(sumofDigitsNumber(12345))

//Qs count the number of digits of a number

// function sumofDigitsNumber (num){
//   num = Math.abs(num)
//   let sum = 0
//     while(num > 0){
//     sum += 1
//     num= Math.floor(num/10)
//     }
//     return sum
// }
// console.log(sumofDigitsNumber(89760000))

// Qs :chedck whether given number is palindrom or not if yes then return true otherwise return false

// function isPalindromeNumber(num){
//     let copyNumber = num
//     let reverse = 0
   
//     while(copyNumber > 0){
//      let lastgigit = copyNumber%10
//      reverse = reverse*10+lastgigit
//      copyNumber = Math.floor(copyNumber/10)
      
//     }
//   console.log('kkk')
//     return num === reverse
// }

// console.log(isPalindromeNumber(134))

//Qs  fibonacci number given n and find f(n) where series start from 0 amd 1


// function fibNumber (n){

//     if(n< 2){
//         return n
//     }

//     let prev =0,curr=1,next;

//     for (let i=2; i<=n; i++ ){
       
//         next = curr+prev
//         prev= curr
//         curr=next
//     }
//     return next
// }

// console.log(fibNumber(2))


// Qs find missing number in a array , array are given 


//  function findMissingarry (arr){

//     let toatlSumofarr = arr.length*(arr.length+1) /2
//     let sum =0
//     for (let i=0; i<arr.length ;i++){
//         sum += arr[i]
//     }
//     console.log(toatlSumofarr,'toatlSumofarr')
//     console.log('sum',sum)
//   return toatlSumofarr - sum
//  }

//  console.log(findMissingarry([0,1,2,3,4,6,7]))

//---------------------------------------------------
    //  ARRAY


  //Qs how do you check if an element in a array or not

//   function checkArray (arr,el){
    // let index 
    // for( let i=0; i< arr.length; i++) {
    //  if( arr[i]===el){
    //   return  index= i
    //  }
    // }
    // return -1
    // return arr.indexOf(el)
  
   
//   }

//   console.log(checkArray([7,8,9,10],9))


// Qs how to delete , add and update elements from specific index

// const arr = [45,21,80,85,85,70]

// const arrD = arr.concat()
// console.log('arr',arr)
// arrD.splice(1,3)
// console.log(arrD)

// Qs how to add two arrays

// const kepp = [1,5,8,80,90]
// const keep2 = [70,80,90,100,101]

// const kepp3 = [...kepp,...keep2]
  
// const kepp3 = kepp.concat(keep2)

// console.log(kepp3)


// Qs how to check two array are equal or not
// const kepp = [1,5,8,80,90]
// const keep2 = [70,80,90,100,101]

// function isQualArray (arr1, arr2){

    // if(arr1.length !== arr2.length){
    //     return false
    // }

    // for(let i=0; i< arr1.length; i++){
    //     if(arr1[i] !== arr2[i]){
    //         return false
    //     }
    // } 

    // return true
//     return arr1.length === arr2.length && arr1.every((el,i)=>arr1[i]===arr2[i])
// }

//console.log(isQualArray([1,5,8,80,90],[1,5,8,80,90]))


// Qs how to sort any array in ascending or decending order


// const x = [-7,8,10,-72,4]

// let sorted = x.sort((a,b)=> a-b)
// console.log(sorted)

// function sortArr(arr){
 

//     for(let i = 0; i<arr.length; i++){
//         let tem 
//         for (let j =0; j<arr.length; j++){
//             if(arr[j] > arr[j+1]){
//                 9>6
//                 tem=  arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = tem   
//         }
//     } 
// }
// return arr

// }


// console.log(sortArr([80,10,0,1,7]))



// Qs how to reverse any array 



// function reverseArr(arr){

//     const reverse  =[]
//     let lastarrIndex = arr.length-1

//     while(lastarrIndex >=0){
        
//         reverse.push(arr[lastarrIndex])
//         lastarrIndex -=1
//     }
//     return reverse

// }

// console.log(reverseArr([2,4,5,10,78,-90]))


function pattern_problem (n){
    //   let n= 4
    for(let row =1; row <= 2*n; row++){
        
        // for every row how many colms are there
        let totalNoofColm  = row >n ? 2*n -row :row;
        for(let colm=1; colm <= totalNoofColm; colm++){
         
          document.write("*")
        }
        // for new line 
        document.write("<br>")
    }
}

pattern_problem(4)



 