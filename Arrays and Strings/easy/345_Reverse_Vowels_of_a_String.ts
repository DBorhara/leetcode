/**
 * Given a string s, reverse only all the vowels in the string and return it.
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both
 * lower and upper cases, more than once.
 *
 * Example 1:
 * Input: s = "hello"
 * Output: "holle"
 *
 * Example 2:
 * Input: s = "leetcode"
 * Output: "leotcede"
 *
 * @param s
 * @returns
 */

// leetcode

function reverseVowels(s: string): string {
  const lowerCaseVowels = ["a", "e", "i", "o", "u"];
  const upperCaseVowels = ["A", "E", "I", "O", "U"];
  const vowelSet: Set<string> = new Set([
    ...lowerCaseVowels,
    ...upperCaseVowels,
  ]);
  let storageArr: string[] = [];
  let wordArr = [...s];

  for (let i = 0; i < wordArr.length; i++) {
    if (vowelSet.has(wordArr[i])) {
      console.log("I EXIST");
      storageArr.push(wordArr[i]);
      wordArr[i] = "_";
    }
  }

  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] === "_") {
      let lastVowel = storageArr.pop();
      wordArr[i] = lastVowel as string;
    }
  }

  return wordArr.join("");
}

reverseVowels("hello");
reverseVowels("leetcode");

/** 2 Pointer Method
 * function reverseVowels(s: string): string {
  const vowelSet: Set<string> = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let wordArr: string[] = [...s];
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (vowelSet.has(wordArr[left]) && vowelSet.has(wordArr[right])) {
      // Swap the vowels
      [wordArr[left], wordArr[right]] = [wordArr[right], wordArr[left]];
      left++;
      right--;
    } else if (vowelSet.has(wordArr[left])) {
      right--;
    } else if (vowelSet.has(wordArr[right])) {
      left++;
    } else {
      left++;
      right--;
    }
  }

  return wordArr.join("");
}
 */
