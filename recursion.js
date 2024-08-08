// Recursion
//  A function is call it self again and again , its call recursion and corresponding function is called recursive function


// print 0 to 10 number using recursive 


const recursiveFuc = function(n){

    console.log('hey recursive',n)    // hey recursive 10  hey recursive 9 hey recursive 8 7 6 5 4 3 2 0
    if(n===0) return 
    recursiveFuc(n-1)
}

// console.log(recursiveFuc(10))



//Qs factorial number where given n , find the foctorial number of given number 

const factorialNum = function(n){

  if(n ===0){
   return
  } else {
    return  n*factorialNum(n-1)
  } 
  
}


// console.log(factorialNum(10)) 


// fabonacci series start from 0,1, 

// fabnacci series  0,1,1,2,3,5,8......



const fibfunc = function(n){
 
    if(n<= 1){
        return n
    }else{
        return  fibfunc(n-1) + fibfunc(n-2)
    }
}

// console.log(fibfunc(3))


// find the reverse of a given array usning recursive

// const reverseFunc = function(arr){
// let newArray =[]

//   if(arr.length ===0) return []
//     return  [...( arr[arr.length-1] )], reverseFunc(arr.slice(0, arr.length-1))
      

    
   
// }

// console.log(reverseFunc([1,5,8,2,3,5]))



// sum of elements of array

const sumArry = function(arr){

    let latIndex = arr.length
   
    if(arr.length ===0){
        return 0
    }else{
        let lestElemnt = arr.pop()
        return lestElemnt + sumArry(arr)
        // return arr[latIndex -1] +  sumArry(arr.slice(0,latIndex-1)) 

    }
      
    
}

console.log(sumArry([1,3,6]))


