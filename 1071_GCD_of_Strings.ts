/*
For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:
Input: str1 = "LEET", str2 = "CODE"
Output: ""
 
Constraints:
1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters. */

function gcdOfStrings(str1: string, str2: string): string {
  const str1Len: number = str1.length;
  const str2Len: number = str2.length;

  /* If Statement
        1. string1 length is less than string2 length
        2. string1 from start to length of string2 is equal to string2
  */
  if (str1Len > str2Len && str1.substring(0, str2Len) === str2) {
    /* Recursively call gcdOfStrings with
        1. string1 get sliced at the length of string 2 trimming 
        it down to remove checked value.
        2. string2
    */
    return gcdOfStrings(str1.slice(str2Len), str2);
  } /* Else If Statement
        1. string1 length is less than string2 length
        2. string2 from the start to length of string1 is equal to string1
*/ else if (str1Len < str2Len && str2.substring(0, str1Len) === str1) {
    /* Recursively call gcdOfStrings with
        1. string1
        2. string2 gets sliced at the length of string1 trimming 
        it down to remove checked value
  */
    return gcdOfStrings(str1, str2.slice(str1Len));
  } /*  Else If Statement
        1. string1 length equals string2 length
        2. string1 equals string2
  */ else if (str1Len === str2Len && str1 === str2) {
    // Return string1
    console.log("str1", str1);
    return str1;
  }

  // If none of return blank
  console.log("NO MATCH");
  return "";
}

gcdOfStrings("ABCABC", "ABC");
gcdOfStrings("ABABAB", "AB");
gcdOfStrings("LEET", "CODE");
