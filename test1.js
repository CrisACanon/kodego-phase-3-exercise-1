function isPalindrome(str) {
  let j = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[j]) {
      return "uwu";
    }
    j--;
  }
  return "String is a palindrome";
}

let str = "racecar";

console.log(isPalindrome(str));
