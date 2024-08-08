

/* 
 Sliding window problem
*/

var maximumSubarraySum = function(nums, k) {
    let subArr = []
    let sum =0
  for(let i =0; i< nums.length ; i++){
      for(let j= 0; j<k; j++){
       
      sum += nums[j]
      console.log(nums[i])
    //   console.log(sum)
    subArr.push (sum)
      }
      
  }
  
  return subArr
  };

  console.log(maximumSubarraySum([1,5,4,2,9,9,9],3))