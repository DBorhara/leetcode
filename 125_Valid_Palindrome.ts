/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
 * and removing all non-alphanumeric characters, it reads the same forward and backward. 
 * Alphanumeric characters include letters and numbers.
 * 
 * Given a string s, return true if it is a palindrome, or false otherwise.
 * 
 * Example 1:
 * 
 * Input: s = "A man, a plan, a canal: Panama"
 * 
 * Output: true
 * 
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 * 
 * Example 2:
 * 
 * Input: s = "race a car"
 * 
 * Output: false
 * 
 * Explanation: "raceacar" is not a palindrome.
 * 
 * Example 3:
 * 
 * Input: s = " "
 * 
 * Output: true
 * 
 * Explanation: s is an empty string "" after removing non-alphanumeric characters.
 * Since an empty string reads the same forward and backward, it is a palindrome.
 * 
 * Constraints:
 * 
 * 1 <= s.length <= 2 * 105
 * 
 * s consists only of printable ASCII characters.
 * 
 * @param s 
 * @returns Boolean value if it is a palindrome
 */
/*
 */

function isPalindrome(s: string): boolean {
  // Remove all non alphanumeric characters and lowercase all
  let sanitizedString: string = s.replace(/[^0-9a-z]/gi, "").toLowerCase();
  // Beginning index of string
  let beginning: number = 0;
  // Ending index of string
  let end: number = sanitizedString.length - 1;
  console.log("sanitizedString", sanitizedString);
  /* 
  While loop
  Conditions
    1. Beginning is less than or equal to end
    2. 1/2 the Length of Sanitized String is reached since we 
     are checking for anagrams half is enough*/
  while (beginning <= end && beginning <= sanitizedString.length / 2) {
    // Check current beginning character does not match current ending character
    // If no match return false
    if (sanitizedString[beginning] !== sanitizedString[end]) {
      console.log(false);
      return false;
    }
    // If match increment beginning and decrement end
    beginning++;
    end--;
  }
  // If while loop completes we return true since all matched.
  console.log(true);
  return true;
}

isPalindrome("A man, a plan, a canal: Panama"); // true
isPalindrome("race a car"); // false
isPalindrome(" "); // true
isPalindrome("ab_a"); // true
