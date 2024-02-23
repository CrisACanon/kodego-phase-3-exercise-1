function isPalindrome(str) {
  let j = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[j]) {
      return "This is a palindrome";
    }
    j--;
  }
  return "uwu";
}

let str = "racecar";

console.log(isPalindrome(str));
