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


//13. Roman to Integer
//Easy
//
//Topics
//Companies
//
//Hint
//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//
//Symbol       Value
//I             1
//V             5
//X             10
//L             50
//C             100
//D             500
//M             1000
//For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
//
//Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
//
//I can be placed before V (5) and X (10) to make 4 and 9. 
//X can be placed before L (50) and C (100) to make 40 and 90. 
//C can be placed before D (500) and M (1000) to make 400 and 900.
//Given a roman numeral, convert it to an integer.
//
// 
//
//Example 1:
//
//Input: s = "III"
//Output: 3
//Explanation: III = 3.
//Example 2:
//
//Input: s = "LVIII"
//Output: 58
//Explanation: L = 50, V= 5, III = 3.
//Example 3:
//
//Input: s = "MCMXCIV"
//Output: 1994
//Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
// 
//
//Constraints:
//
//1 <= s.length <= 15
//s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
//It is guaranteed that s is a valid roman numeral in the range [1, 3999].
//
var romanToInt = function (s){
  const romanMap = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000,
  }

  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const current = romanMap[s[i]];
    const next = romanMap[s[i + 1]];
  
    if (next > current) {
      total += next - current;
      i++; // skip next
    } else {
      total += current;
    }
  }
  
  cl(total)
}

//romanToInt("LVII")
romanToInt("MCMXCIV")

//28. Find the Index of the First Occurrence in a String
//Easy
//
//Topics
//Companies
//Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
//
// 
//
//Example 1:
//
//Input: haystack = "sadbutsad", needle = "sad"
//Output: 0
//Explanation: "sad" occurs at index 0 and 6.
//The first occurrence is at index 0, so we return 0.
//Example 2:
//
//Input: haystack = "leetcode", needle = "leeto"
//Output: -1
//Explanation: "leeto" did not occur in "leetcode", so we return -1.
// 
//
//Constraints:
//
//1 <= haystack.length, needle.length <= 104
//haystack and needle consist of only lowercase English characters.

var strStr = function(haystack, needle) {
  return haystack.indexOf(needle)
};

//2727. Is Object Empty
//Solved
//Easy
//premium lock icon
//Companies
//Given an object or an array, return if it is empty.
//
//An empty object contains no key-value pairs.
//An empty array contains no elements.
//You may assume the object or array is the output of JSON.parse.
//
// 
//
//Example 1:
//
//Input: obj = {"x": 5, "y": 42}
//Output: false
//Explanation: The object has 2 key-value pairs so it is not empty.
//Example 2:
//
//Input: obj = {}
//Output: true
//Explanation: The object doesn't have any key-value pairs so it is empty.
//Example 3:
//
//Input: obj = [null, false, 0]
//Output: false
//Explanation: The array has 3 elements so it is not empty.
// 
//
//Constraints:
//
//obj is a valid JSON object or array
//2 <= JSON.stringify(obj).length <= 105

var isEmpty = function(obj){
  //console.log(Object.keys(obj))
  if(Object.keys(obj).length === 0){
    return true
  }else return false
}

//2726. Calculator with Method Chaining
//Solved
//Easy
//premium lock icon
//Companies
//Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the initial value of result.
//
//Your Calculator class should have the following methods:
//
//add - This method adds the given number value to the result and returns the updated Calculator.
//subtract - This method subtracts the given number value from the result and returns the updated Calculator.
//multiply - This method multiplies the result  by the given number value and returns the updated Calculator.
//divide - This method divides the result by the given number value and returns the updated Calculator. If the passed value is 0, an error "Division by zero is not allowed" should be thrown.
//power - This method raises the result to the power of the given number value and returns the updated Calculator.
//getResult - This method returns the result.
//Solutions within 10-5 of the actual result are considered correct.
//
// 
//
//Example 1:
//
//Input: 
//actions = ["Calculator", "add", "subtract", "getResult"], 
//values = [10, 5, 7]
//Output: 8
//Explanation: 
//new Calculator(10).add(5).subtract(7).getResult() // 10 + 5 - 7 = 8
//Example 2:
//
//Input: 
//actions = ["Calculator", "multiply", "power", "getResult"], 
//values = [2, 5, 2]
//Output: 100
//Explanation: 
//new Calculator(2).multiply(5).power(2).getResult() // (2 * 5) ^ 2 = 100
//Example 3:
//
//Input: 
//actions = ["Calculator", "divide", "getResult"], 
//values = [20, 0]
//Output: "Division by zero is not allowed"
//Explanation: 
//new Calculator(20).divide(0).getResult() // 20 / 0 
//
//The error should be thrown because we cannot divide by zero.
// 
//
//Constraints:
//
//actions is a valid JSON array of strings
//values is a valid JSON array of numbers
//2 <= actions.length <= 2 * 104
//1 <= values.length <= 2 * 104 - 1
//actions[i] is one of "Calculator", "add", "subtract", "multiply", "divide", "power", and "getResult"
//First action is always "Calculator"
//Last action is always "getResult"

class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(initialValue) {
        this.value = initialValue
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(num){
        this.value += num
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(num){
        this.value -= num
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(num) {
        this.value *= num
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(num) {
        if(num === 0){
          throw new Error("Division by zero is not allowed")
        }else {
          this.value /= num
          return this
        }

        
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(num) {
        this.value = Math.pow(this.value, num)
        return this
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.value
    }
}


//2725. Interval Cancellation
//Easy
//premium lock icon
//Companies
//Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.
//
//After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
//
//setTimeout(cancelFn, cancelTimeMs)
//The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.
//
// 
//
//Example 1:
//
//Input: fn = (x) => x * 2, args = [4], t = 35
//Output: 
//[
//   {"time": 0, "returned": 8},
//   {"time": 35, "returned": 8},
//   {"time": 70, "returned": 8},
//   {"time": 105, "returned": 8},
//   {"time": 140, "returned": 8},
//   {"time": 175, "returned": 8}
//]
//Explanation: 
//const cancelTimeMs = 190;
//const cancelFn = cancellable((x) => x * 2, [4], 35);
//setTimeout(cancelFn, cancelTimeMs);
//
//Every 35ms, fn(4) is called. Until t=190ms, then it is cancelled.
//1st fn call is at 0ms. fn(4) returns 8.
//2nd fn call is at 35ms. fn(4) returns 8.
//3rd fn call is at 70ms. fn(4) returns 8.
//4th fn call is at 105ms. fn(4) returns 8.
//5th fn call is at 140ms. fn(4) returns 8.
//6th fn call is at 175ms. fn(4) returns 8.
//Cancelled at 190ms
//Example 2:
//
//Input: fn = (x1, x2) => (x1 * x2), args = [2, 5], t = 30
//Output: 
//[
//   {"time": 0, "returned": 10},
//   {"time": 30, "returned": 10},
//   {"time": 60, "returned": 10},
//   {"time": 90, "returned": 10},
//   {"time": 120, "returned": 10},
//   {"time": 150, "returned": 10}
//]
//Explanation: 
//const cancelTimeMs = 165; 
//const cancelFn = cancellable((x1, x2) => (x1 * x2), [2, 5], 30) 
//setTimeout(cancelFn, cancelTimeMs)
//
//Every 30ms, fn(2, 5) is called. Until t=165ms, then it is cancelled.
//1st fn call is at 0ms 
//2nd fn call is at 30ms 
//3rd fn call is at 60ms 
//4th fn call is at 90ms 
//5th fn call is at 120ms 
//6th fn call is at 150ms
//Cancelled at 165ms
//Example 3:
//
//Input: fn = (x1, x2, x3) => (x1 + x2 + x3), args = [5, 1, 3], t = 50
//Output: 
//[
//   {"time": 0, "returned": 9},
//   {"time": 50, "returned": 9},
//   {"time": 100, "returned": 9},
//   {"time": 150, "returned": 9}
//]
//Explanation: 
//const cancelTimeMs = 180;
//const cancelFn = cancellable((x1, x2, x3) => (x1 + x2 + x3), [5, 1, 3], 50)
//setTimeout(cancelFn, cancelTimeMs)
//
//Every 50ms, fn(5, 1, 3) is called. Until t=180ms, then it is cancelled. 
//1st fn call is at 0ms
//2nd fn call is at 50ms
//3rd fn call is at 100ms
//4th fn call is at 150ms
//Cancelled at 180ms
// 
//
//Constraints:
//
//fn is a function
//args is a valid JSON array
//1 <= args.length <= 10
//30 <= t <= 100
//10 <= cancelTimeMs <= 500

var cancellable = function (fn, args, t) {
  // Immediately call the function once
  fn(...args);

  // Set up an interval to keep calling it every t milliseconds
  const intervalId = setInterval(() => {
    fn(...args);
  }, t);

  // Return a cancel function that stops the interval
  return function cancelFn() {
    clearInterval(intervalId);
  };
};

//7. Reverse Integer
//Medium
//
//Topics
//premium lock icon
//Companies
//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
//
//Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
//
// 
//
//Example 1:
//
//Input: x = 123
//Output: 321
//Example 2:
//
//Input: x = -123
//Output: -321
//Example 3:
//
//Input: x = 120
//Output: 21
// 
//
//Constraints:
//
//-231 <= x <= 231 - 1


var reverse = function(x) {
    //take in an integer? integers only? not strings?
    //a signed 32 bit integer is a number between 1 and 2^31
    //number goven will be in the correct range? 
    //reversed number has to be between correct range?
    //if number has trailing 00s then the inverse shoudnt have them            (reversed number shouldnt have leading zeros)
    // so if I return the reversed number 
    //as a number
    //and the number is  in the correct signed 32 bit integer range then ive solved the equation?

    //check if negative
    //turn number to string
    //reverse string
    //convert to number
    //if or while statement that checks number is in range
    //return number if in range
    //return zero if else

        const posNum =  Math.abs(x) //remove negatives if neg
        const revNumStr = posNum.toString().split("").reverse().join("") //create arr, convert to str, and join'
        let revNum = Number(revNumStr) //convert to num

        x < 0 ? revNum = revNum * -1 : revNum = revNum //check if num was positive or negative and apply neg sign if necessary

        //calculate 32 bit parameters
        const max = Math.pow(2,31)
        console.log(max)
        if(revNum > (max * -1) && revNum <= max ){
          console.log( revNum)
        }else console.log( 0)
};

reverse(-123)