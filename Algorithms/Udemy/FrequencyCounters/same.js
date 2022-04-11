//  Write a function called same, which accepts two arrays. 
//  The function should return true if every value in the array 
//  has its corresponding value squared in the second array. 
//  The frequency of values must be the same.

// EX: 	[1, 2, 3],  [4, 1, 9]	 true
// 	    [1, 2, 3],  [1, 9]	     false
// 	    [1, 2, 1], [4, 4, 1]	 false

function sameSquared(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let counter1 = {};
  let counter2 = {};
  for (let i = 0; i <= arr1.length; i++) {
    let num = arr1[i];
    counter1[num] = (counter1[num] || 0) + 1;
  }
  for (let i = 0; i <= arr2.length; i++) {
    let num = arr2[i];
    counter2[num] = (counter2[num] || 0) + 1;
  }
  for (let i = 0; i < arr1.length; i++) {
    let num = arr1[i];
    if (counter1[num] !== counter2[num * num]) {
      return false;
    }
    return true;
  }
}

// better approach using for in loops

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let counter1 = {};
  let counter2 = {};

  for (let val of arr1) {
    counter1[val] = (counter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }

  for (let key in counter1) {
    if (counter1[key] !== counter2[key * key]) {
      return false;
    }
  }
  return true;
}

