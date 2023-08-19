/**
 * Given an integer array nums, return an array answer such that answer[i] 
 * is equal to the product of all the elements of nums except nums[i].
 * 
 * The product of any prefix or suffix of nums is guaranteed to fit 
 * in a 32-bit integer.
 * 
 * You must write an algorithm that runs in O(n) time and without using 
 * the division operation.
 * 
 * Example 1:
 * Input: nums = [1,2,3,4]
 * 
 * Output: [24,12,8,6]
 * 
 * Example 2:
 * 
 * Input: nums = [-1,1,0,-3,3]
 * 
 * Output: [0,0,9,0,0]
 
Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
@param nums
@return Array of numbers

 */

function productExceptSelf(nums: number[]): number[] {
  const left: number[] = new Array(nums.length).fill(1);
  const right: number[] = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = left[i] * right[i];
  }

  return nums;
}

productExceptSelf([1, 2, 3, 4]);

// [1,]
productExceptSelf([-1, 1, 0, -3, 3]); // [0,0,9,0,0]
productExceptSelf([4, 3, 2, 1, 2]); // [12,16,24,48,24]
