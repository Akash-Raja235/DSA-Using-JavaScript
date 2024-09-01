
/*
Array data structure..


*/

/*
All arrays method
push
pop
shift-remove first element
unshift - add at possion first
includes
sort
filter
map
concat
flat
splice---> index tak remove hota h, its does not return new array it changes original array
slice --> index-1 tak remove karta h, it return new array. it does not change original array
find
indexOf
lastIndexOf
forEach
reverse

*/
const dir = [1,2,3,4,5,6,7]

// let unique = [... new Set(dir)]
// console.log(unique)

var removeDuplicates = function(nums,k) {

    let newArr = nums.slice(-3)
    let restArr = nums.splice(0,nums.length-k)
    console.log(restArr)

    let kk = newArr.concat(restArr)
    // console.log(kk)
 };
// var removeDuplicates = function(nums) {
//     // method 1
//     let unique = [...new Set(nums)]
//    return unique
// };
// console.log(removeDuplicates(dir,3))
    //  let flag = true
    //             //4>
    //  for(let i=0; i<arr.length ; i++){

    //     for(let j =0; j<arr.length; j++){

    //         if(arr[j] > arr[j+1]){
    //             let temp = arr[j]
    //             arr[j] = arr[j+1]
    //             arr[j+1] = temp
    //         }

            
    //     }
    //  }
    
       
    function merSort(aar){

        if (aar.length <= 1) {
            return aar;
         }
       let mid = Math.floor(aar.length/2) 
       let left = aar.slice(0, mid)
       let right = aar.slice(mid)
        return merge(merSort(left),merSort(right))

       

    }

    function merge(left, right){

        let result = []
        while(left.length && right.length){
       if(left[0] < right[0] ){
        result.push(left.shift())
       }else{
        result.push(right.shift())
       }
       
        }
        return [...result, ...left,...right]
    }
  


//   console.log(merSort([3,4,3,9,10,11]))
// console.log(newArr)





// Two sum problem
// given a arr  = [2,10,9,7,15] and target value target = 9 return the indexn of two number of subssetv which equal to target value


const twoSum = (arr, target)=>{
 
    for(let i = 0; i < arr.length; i++){

        for(let j = 0; j < arr.length; j++){

          if( target == arr[i] + arr[j] ){
            return [i,j]
          }
        }
    }

}


// console.log(twoSum([2,10,9,7,15],9))   // tc = O(n2)


// two sum tc = O(n)


const twoSumUsingTwiPointer = (arr,target)=>{

   let newArr = [...arr]
// console.log('arr',arr)
 // [2,5,7,10,15] = 9
   let sortedArry = newArr.sort((a,b)=>a-b)
     let j = sortedArry.length-1
     let i= 0
   while(i<j){
    if(sortedArry[i]+ sortedArry[j] < target){
        console.log('i++')
        i++
    }else if(sortedArry[i] + sortedArry[j] > target){
        console.log('J++')
        j--
    }
    if(sortedArry[i] + sortedArry[j] == target){
        
        console.log('first')
        if(sortedArry[i] != sortedArry[j]){

            return [arr.indexOf(sortedArry[i]),arr.indexOf(sortedArry[j])]

        }else{
            return [arr.indexOf(sortedArry[i]),arr.lastIndexOf(sortedArry[j])] 
        }
    }
   }

}
console.log(twoSumUsingTwiPointer([4,10,5,4,15],8))   // tc = O(n)


// Sliding window Problem: find max in every subarray where window size k =3 
function max_of_subarrays(arr, n, k)
	{
        // code here
        let i=0
        let j= 0
        let max = 0
        let res  =[]
        while(j < n){
            console.log('first')
       max= Math.max(max,arr[j])
       console.log('max',max)
        if(j-i+1 == k){
            console.log('kkkk')
        res.push(max)
        i++
        }
        j++
        
        
    }
    return res

}


function findPairs(arr) {
    // code here
     let p=0;
     let q = 0;
     let sum = 0
     
     let hash = new Map()
    for(let i =0; i< arr.length; i++){
        
        for(let j=i; j< arr.length; j++){
        
            if(arr[i]!=arr[j]){
                hash.set(`${arr[i]},${arr[j]}`,arr[i]+ arr[j]) 
             }
              
           
         
       
        }
    }
    
    
    console.log(hash,'kkkkkkkkkkkkk')
    let l = hash.size
    
  const createdSet = new Set(hash.keys());
  
 let sl = createdSet.size
 if(sl===l){
    return false
 }else{
    return true
 }
    
    
    
}

console.log(findPairs([65, 30, 7, 90, 1, 9, 8]))

    // console.log(max_of_subarrays([1,2,3,1,4,5,2,3,6],9,3))



    // Qn Gigen an integer of an Array ,find the longest substring those sum is equal to k, k =5
    //  nums = [4,1,1,1,2,3,5]

    /*
     genrazation: Total subarray [4,1] =k = 2(size of array)
     [1,1,1,2] = k = 4
     [2,2] = k= 2
     [5]= k = 1

     longest subarray = 4 (ans)

     */
    
     function longestSubarray (nums,k){

        let i = 0;
        let j = 0;

        let sum  = 0;
        let wsMax = 0; 
        while(j < nums.length){
           // find  candidate of window
            if(sum < k){
              sum += nums[j]
                j++
             
            }
            if(sum ===k){
             // get first candiadate

             Math.max(wsMax,j-i+1)
             j++

            }
            if(sum > k){
               while(sum < k){
                
                i++
               }
              
            }
        }
     }

     console.log(longestSubarray([4,1,1,1,2,3,5],5))
     



    