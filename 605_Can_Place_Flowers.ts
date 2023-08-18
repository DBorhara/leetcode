/**
 * You have a long flowerbed in which some of the plots are planted,
 * and some are not. However, flowers cannot be planted in adjacent plots.
 *
 * Given an integer array flowerbed containing 0's and 1's, where 0 means
 * empty and 1 means not empty, and an integer n, return true if n new
 * flowers can be planted in the flowerbed without violating the no-adjacent-flowers
 * rule and false otherwise.
 *
 * Example 1:
 *
 * Input: flowerbed = [1,0,0,0,1], n = 1
 *
 * Output: true
 *
 * Example 2:
 *
 * Input: flowerbed = [1,0,0,0,1], n = 2
 *
 * Output: false
 *
 * @param flowerbed - An array of 1's and 0'
 * @returns The boolean value if all flowers are placed
 */

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  // Variable to catch empty space count
  let plantedFlowers: number = 0;

  // Iterate through flowerbed
  flowerbed.forEach((_, index) => {
    // Assign index values for previous flower space and next flower space
    const prevSpace: number = index - 1;
    const nextSpace: number = index + 1;
    /**
     * if
     * 1. previous space is not falsey
     * 2. current space is not falsey
     * 3. next space is not falsey
     */
    if (!flowerbed[prevSpace] && !flowerbed[index] && !flowerbed[nextSpace]) {
      // Incremement noNeightbors because its 0,0,0
      plantedFlowers++;
      // set current space to 1
      flowerbed[index] = 1;
      // Jump ahead one index since next iteration prevSpace will be a 1
      index++;
    }
  });
  //   console.log("flowerbed", flowerbed);
  console.log("noNeighbors", plantedFlowers);
  console.log("n", n);
  console.log(plantedFlowers === n);
  // if plantedFlowers is greater or equal to n we have used up all flowers -- true
  // if plantedFlowers is less than n we havent used up all flowers -- false
  return plantedFlowers >= n;
}

canPlaceFlowers([1, 0, 0, 0, 1], 1); // true
canPlaceFlowers([1, 0, 0, 0, 1], 2); // false
canPlaceFlowers([1, 0, 0, 0, 0, 1], 2); // false
canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2); //true
canPlaceFlowers([0, 0, 1, 0, 1], 1); // true
