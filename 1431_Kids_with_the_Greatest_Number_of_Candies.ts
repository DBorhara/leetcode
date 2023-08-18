/**
 * There are n kids with candies. You are given an integer array candies, 
 * where each candies[i] represents the number of candies the ith kid has, 
 * and an integer extraCandies, denoting the number of extra candies that you have.
 * 
 * Return a boolean array result of length n, where result[i] is true if, 
 * after giving the ith kid all the extraCandies, they will have the greatest 
 * number of candies among all the kids, or false otherwise.
 * 
 * Note that multiple kids can have the greatest number of candies.
 * 
 * Example 1:
 * 
 * Input: candies = [2,3,5,1,3], extraCandies = 3
 * 
 * Output: [true,true,true,false,true] 
 * 
 * Explanation: If you give all extraCandies to:
 * - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
 * - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
 * - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
 * - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
 * - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
 * 
 * Example 2:
 * 
 * Input: candies = [4,2,1,1,2], extraCandies = 1
 * 
 * Output: [true,false,false,false,false] 
 * 
 * Explanation: There is only 1 extra candy.
 * Kid 1 will always have the greatest number of candies, even 
 * if a different kid is given the extra candy.
 * 
 * Example 3:
 * 
 * Input: candies = [12,1,12], extraCandies = 10
 * 
 * Output: [true,false,true]
 * 
 * @param candies
 * @param extraCandies
 * @returns Boolean array of kids who have max candies after getting extraCandies
 */

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  // Get greatest number of candies in array
  let currentGreatest: number = Math.max(...candies);
  // Set up output array
  let candiesArr: boolean[] = [];

  // Loop through all kids with their candy
  for (let i = 0; i < candies.length; i++) {
    // Current kids combined count if candies plus the extraCandie
    const combinedCandyCount = candies[i] + extraCandies;
    // If the combined count is greater than or equal to current greatest
    if (combinedCandyCount >= currentGreatest) {
      // Put true for that kid in the array
      candiesArr.push(true);
    } else {
      // If less we put false
      candiesArr.push(false);
    }
  }
  console.log("candiesArr", candiesArr);
  // Return the output array of who has the greatest candy count
  return candiesArr;
}

kidsWithCandies([2, 3, 5, 1, 3], 3); // [true,true,true,false,true]
kidsWithCandies([4, 2, 1, 1, 2], 1); // [true,false,false,false,false]
kidsWithCandies([12, 1, 12], 10); // [true,false,true]

/*
Witty solution
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const maxNumber: number = Math.max(...candies);
    return candies.map(el => el + extraCandies >= maxNumber );
};
*/
