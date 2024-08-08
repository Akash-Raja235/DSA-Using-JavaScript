
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
    console.log(kk)
 };
// var removeDuplicates = function(nums) {
//     // method 1
//     let unique = [...new Set(nums)]
//    return unique
// };
console.log(removeDuplicates(dir,3))
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




