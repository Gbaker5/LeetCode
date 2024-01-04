//////////////////////////////////////////

//////////////////////////////////////////

var romanToInt = function(s) {
    arr = s.split('')
    console.log(arr)
    nums=[];
    
    for(i=0;i<arr.length;i++){
      if(arr[i] == "I"){
        nums.push(1)
      }else if(arr[i] == "V"){
        nums.push(5)
      }else if(arr[i] == "X"){
        nums.push(10)
      }else if(arr[i] == "L"){
        nums.push(50)
      }else if(arr[i] == "C"){
        nums.push(100)
      }else if(arr[i] == "D"){
        nums.push(500)
      }else if(arr[i] == "M"){
        nums.push(1000)
      }
      
    };
  
    return nums.reduce((acc,c) => acc + c)
  }
  console.log(romanToInt("III"))

  //1. Two Sum
//Easy

//Topics
//Companies

//Hint
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.

 

//Example 1:

//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
//Example 2:

//Input: nums = [3,2,4], target = 6
//Output: [1,2]
//Example 3:

//Input: nums = [3,3], target = 6
//Output: [0,1]

var twoSum = function(nums, target){
  for(i=0;i<nums.length;i++){
      for(j=1;j<nums.length;j++){
          //console.log(nums[i],nums[j])
          if(nums[i] + nums[j] == target){
              console.log([i,j])
          }
      }
      
  }
};

twoSum([2,7,11,15], 9)