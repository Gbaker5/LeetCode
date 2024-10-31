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
          if(nums[i] + nums[j] == target && i !== j){
              console.log([i,j])
          }
      }
      
  }
};

twoSum([2,7,11,15], 9)


//11. Container With Most Water
//Medium
//
//Topics
//Companies
//
//Hint
//You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
//
//Find two lines that together with the x-axis form a container, such that the container contains the most water.
//
//Return the maximum amount of water a container can store.
//
//Notice that you may not slant the container.
//
// 
//
//Example 1:
//
//
//Input: height = [1,8,6,2,5,4,8,3,7]
//Output: 49
//Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
//Example 2:
//
//Input: height = [1,1]
//Output: 1
// 
//
//Constraints:
//
//n == height.length
//2 <= n <= 105
//0 <= height[i] <= 104

//nested forloop
  //first loop -loops through each height  
  //second loop checks against the other heights
  //with the two numbers find the lowest num of the two 
  // Area = height * length = multiply the lowest num and the amount of indices between the first and second num

  //now check with one is the highest
  //create variable for highArea = [];
  //if current Area > Area then Area  = current Area

 

  var maxArea = function(height){

    let highestArea = 0;
    
   for(i=0;i<height.length;i++){
    for(j=0;j<height.length;j++){
        cl(height[i],height[j])
       lowestH =  Math.min(height[i],height[j])
       length = Math.max([i],[j]) - Math.min([i],[j])
       area = lowestH * length
       cl(lowestH)
       cl(length)
       cl(area)
       if(area > highestArea){
        highestArea = area
       }else highestArea + 0
    }
   }
   return highestArea

}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))