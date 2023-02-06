let first = 5;
let second = 7;
console.log(first, second);

//approach: 1
const swap = first;
first = second;
second = swap;

console.log(first, second);

//approach: 2 ---Destructuring
[first, second] = [second, first];
console.log(first, second);