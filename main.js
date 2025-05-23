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

//solution with lower complexity

var maxArea2 = function(height) {
  let left = 0;                       // Left pointer at the start
  let right = height.length - 1;      // Right pointer at the end
  let highestArea = 0;

  while (left < right) { //while left index is a lower index than right index 
      // Calculate the area based on the current left and right pointers
      let minHeight = Math.min(height[left], height[right]); //height [1,7] ->1
      cl(minHeight)
      let width = right - left; //difference between indices or length (8-0) ->8
      cl(width)
      let area = minHeight * width; //8 *1 = 8
      cl(area)

      // Update the maximum area found
      highestArea = Math.max(highestArea, area);

      // Move the pointer with the smaller height inward
      if (height[left] < height[right]) { //so this continues to check against the larger height (whicheber is small)
          left++; //if left is smaller move index forward
      } else {
          right--; // if right is smaller move index backwards
      }
  }

  return highestArea;
};

console.log(maxArea2([1,8,6,2,5,4,8,3,7])); // Output: 49

//88. Merge Sorted Array
//Easy
//
//Topics
//Companies
//
//Hint
//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
//
//Merge nums1 and nums2 into a single array sorted in non-decreasing order.
//
//The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
//
// 
//
//Example 1:
//
//Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//Output: [1,2,2,3,5,6]
//Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
//The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
//Example 2:
//
//Input: nums1 = [1], m = 1, nums2 = [], n = 0
//Output: [1]
//Explanation: The arrays we are merging are [1] and [].
//The result of the merge is [1].
//Example 3:
//
//Input: nums1 = [0], m = 0, nums2 = [1], n = 1
//Output: [1]
//Explanation: The arrays we are merging are [] and [1].
//The result of the merge is [1].
//Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
// 
//
//Constraints:
//
//nums1.length == m + n
//nums2.length == n
//0 <= m, n <= 200
//1 <= m + n <= 200
//-109 <= nums1[i], nums2[j] <= 109
 

//[1,2,3,0,0,0],3,[2,5,6],3) 
//*** TOP 150
var merge = function(nums1, m, nums2, n) {
  
  // Start from the end of the arrays
  let p1 = m - 1; // Pointer for nums1
  let p2 = n - 1; // Pointer for nums2
  let p = m + n - 1; // Pointer for placement in nums1

  // Merge the arrays
  while (p1 >= 0 && p2 >= 0) {      //while pointer one and pointer are greater than 0
      if (nums1[p1] > nums2[p2]) {  // this should give you the last index of numbers greater than 0 and find the larger number 
          nums1[p] = nums1[p1];     // the larger number is added to the last index of nums1
          p1--;                     // move p1
      } else {
          nums1[p] = nums2[p2];     //
          p2--;                     // move p2
      }
      p--;
  }

  // If there are remaining elements in nums2, add them
  while (p2 >= 0) {
      nums1[p] = nums2[p2];
      p2--;
      p--;
  }



//nums1 = nums1.filter((x) => x > 0)
//nums2 = nums2.filter((x) => x > 0)
//nums1 = nums1.concat(nums2)
//nums1 = nums1.sort((a,b) => a > b)


//joined = nums1.concat(nums2).sort((a,b) => a > b)
//nozero = joined.filter((x) => x > 0)
//return nozero
};

cl(merge([1,2,3,0,0,0],3,[2,5,6],3))

//27. Remove Element
//Solved
//Easy
//
//Topics
//Companies
//
//Hint
//Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
//
//Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
//
//Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
//Return k.
//Custom Judge:
//
//The judge will test your solution with the following code:
//
//int[] nums = [...]; // Input array
//int val = ...; // Value to remove
//int[] expectedNums = [...]; // The expected answer with correct length.
//                            // It is sorted with no values equaling val.
//
//int k = removeElement(nums, val); // Calls your implementation
//
//assert k == expectedNums.length;
//sort(nums, 0, k); // Sort the first k elements of nums
//for (int i = 0; i < actualLength; i++) {
//    assert nums[i] == expectedNums[i];
//}
//If all assertions pass, then your solution will be accepted.
//
// 
//
//Example 1:
//
//Input: nums = [3,2,2,3], val = 3
//Output: 2, nums = [2,2,_,_]
//Explanation: Your function should return k = 2, with the first two elements of nums being 2.
//It does not matter what you leave beyond the returned k (hence they are underscores).
//Example 2:
//
//Input: nums = [0,1,2,2,3,0,4,2], val = 2
//Output: 5, nums = [0,1,4,0,3,_,_,_]
//Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
//Note that the five elements can be returned in any order.
//It does not matter what you leave beyond the returned k (hence they are underscores).
// 
//
//

var removeElement = function(nums, val) {
  let k = 0; // Counter for the number of elements not equal to val

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
          nums[k] = nums[i]; // Place the current element at index k
          k++;
      }
  }

  return k;
};


//20. Valid Parentheses
//Easy
//
//Topics
//Companies
//
//Hint
//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
//An input string is valid if:
//
//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.
//Every close bracket has a corresponding open bracket of the same type.
// 
//
//Example 1:
//
//Input: s = "()"
//
//Output: true
//
//Example 2:
//
//Input: s = "()[]{}"
//
//Output: true
//
//Example 3:
//
//Input: s = "(]"
//
//Output: false
//
//Example 4:
//
//Input: s = "([])"
//
//Output: true
//
// 
//
//Constraints:
//
//1 <= s.length <= 104
//s consists of parentheses only '()[]{}'.





function isValid(s) {
  const stack = [];
  const bracketMap = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let char of s) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {
      if (stack.pop() !== bracketMap[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
