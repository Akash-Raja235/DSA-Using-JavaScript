

// linean search 
// time complexity  O(n)

// find the given tareget number in a array if present return index otherwise freturn -1

    /* 
     arr = [1,2,3,4,5,6,7]   targert 5

    */

    const linearSearch = function(arr,target){
         
        for(let i = 0; i < arr.length ; i++){
            if(arr[i] === target){
                return i
            }
        }
        return -1
    }

    // console.log(linearSearch([1,2,3,4,5,6,7],50))


    // Binary search 


    /*  arr = [8,5,0,8,4,90,56,23]  target   = 23
    if it sorted array  [0,4,5,8,23,56,90]
    then 
    let start o , end = arr.length-1
    let mid  = (start+end)/2 // 3.5 take floor value 3
    now arr[mid] < target
             start = mid+1
             
             arr[mid] > target
             end = mind-1
             
             */


             const binarySearch = function(arr , target){

                let start = 0; let end = arr.length-1

                while(start <= end){

                    let mid = Math.floor((start+end)/2)

                    if(arr[mid] ===target){
                        return mid
                    }
                     if(arr[mid] <target){
                        start = mid+1
                    }
                    else{
                        end = mid-1
                    }
                }
                return -1
             }

            //  console.log(binarySearch([0,4,5,8,23,56,90],23))

             const binarySearchUsingRec = (arr, target)=>{
              return  binaryRecusion(arr, target, 0, arr.length-1)
             }

             const binaryRecusion =(arr, target, start,end)=>{

                 if(start > end){
                    return -1
                 }

                 let mid =Math.floor( (start+end)/2 )

                 if(arr[mid] ===target){
                    return mid
                 } else if( arr[mid] < target){
                    return binaryRecusion(arr, target, start=mid+1,end)
                 }else {
                    return binaryRecusion(arr, target, start, end=mid-1)
                 }
                }
                

             

             console.log(binarySearchUsingRec([0,4,5,8,23,56,90],23))