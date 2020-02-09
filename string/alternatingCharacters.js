/**
 * You are given a string containing characters A and V only.
 * Your task is to change it into a string such that there are no matching adjacent characters.
 * To do this, you are allowed to delete zero or more characters in the string.
 * Your task is to find the minimum number of required deletions.
 * For example, given the string s = AABAAB, remove an A at positions 0 and 3 to make s = ABAB in 2 deletions.
 */

const example1 = "AAABBB";

function alternatingCharacters(s) {
  const arr = s.split("");
  let deletions = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      deletions++;
    }
  }
  return deletions;
}

alternatingCharacters(example1);
