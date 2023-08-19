/**
 * Given an integer array nums, return true if there exists a
 * triple of indices (i, j, k) such that i < j < k and
 * nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,4,5]
 *
 * Output: true
 *
 * Explanation: Any triplet where i < j < k is valid.
 *
 * Example 2:
 *
 * Input: nums = [5,4,3,2,1]
 *
 * Output: false
 *
 * Explanation: No triplet exists.
 *
 * Example 3:
 *
 * Input: nums = [2,1,5,0,4,6]
 *
 * Output: true
 *
 * Explanation: The triplet (3, 4, 5) is valid because
 * nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 *
 * Constraints:
 *
 * 1 <= nums.length <= 5 * 105
 * -231 <= nums[i] <= 231 - 1
 *
 * @param nums
 * @returns boolean
 */

function increasingTriplet(nums: number[]): boolean {
  // one will keep track of the smallest number in the sequence so far.
  let one = Infinity;
  //two will keep track of the second smallest number in the sequence after one.
  let two = Infinity;

  for (let i = 0; i < nums.length; i++) {
    // If I find a smaller number, I'll consider it
    // as the potential start of my increasing sequence.
    if (nums[i] <= one) {
      one = nums[i];
    } // we have now found a potential second number
    // for our sequence that's greater than the
    else if (nums[i] <= two) {
      two = nums[i];
    } else {
      /**
       * If the number is greater than both one and two, it means we've found
       * a third number in the sequence, so we return true.
       * This is because if a number is greater than both one and two,
       * it implies that there exists a sequence in the list where
       * nums[i] < nums[j] < nums[k].
       * */
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
}
/**
 * Imagine the numbers in nums are: [1, 2, 0, 3].
 * 
 * First number is 1:
 * one becomes 1 (since 1 < Infinity).

 * Second number is 2:
 * It's greater than one (which is 1) but less than two (which is Infinity), 
 * so two becomes 2.

 * Third number is 0:
 * one becomes 0 (since 0 < 1).

 * Fourth number is 3:
 * It's greater than both one (which is 0) and two (which is 2). 
 * Therefore, we've found our increasing triplet (0, 2, 3) and 
 * the function returns true.
 */

increasingTriplet([1, 2, 3, 4, 5]); // true
increasingTriplet([5, 4, 3, 2, 1]); // false
increasingTriplet([2, 1, 5, 0, 4, 6]); // true
increasingTriplet([20, 100, 10, 12, 5, 13]); //true
