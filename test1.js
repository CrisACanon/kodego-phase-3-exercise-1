function isPalindrome(str) {
  let pal = str.split("").reverse().join("");

  if (pal == str) {
    return "This is a palindrome";
  }
  return "uwu";
}

let str = "RACECAR";
let str2 = "hello world";

console.log(isPalindrome(str));
console.log(isPalindrome(str2));
