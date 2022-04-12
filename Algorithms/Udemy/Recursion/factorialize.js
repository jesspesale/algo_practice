// Given a number return its factorial
//  so num = 5  - > num! = % * 4 * 3 * 2 * 1

function factorialize(num) {
  if (num === 0) return 1;

  return num * factorialize(num - 1);
}

factorialize(5);

// without recursion

// function factorialize(num){
//     let total = 1;
//     for(let i = num; i > 0; i--){
//         total *= i
//     }
//     return total
// }