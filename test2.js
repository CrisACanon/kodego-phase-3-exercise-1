let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 643, 67, 5876, 6345, 34, 3453];

let evenNumbers = [];

let oddNumbers = [];

function classifyNumbers(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 == 0) {
      evenNumbers.push(arr[i]);
    } else {
      oddNumbers.push(arr[i]);
    }
  }
}

classifyNumbers(numbers);

console.log("Even numbers: " + evenNumbers);
console.log("Odd numbers: " + oddNumbers);
