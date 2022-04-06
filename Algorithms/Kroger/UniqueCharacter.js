// A unique character is one that appears only once in a string.
// Given a string of consisting of lowercase Engilish letters only,
// return the idnex of the first occurence of a unique character in
//  the string using -1 based indexing


function getUniqueCharacter(s) {
  let length = s.length;
  // create an empty object that will hold every character and its frequence
  let counter = {};

  for (let i = 0; i < length; i++) {
    let ind = s[i];
    counter[ind] = (counter[ind] || 0) + 1;
    // add all unique values and their frequecy to the counter
  }

  for (let val in counter) {
    if (counter[val] == 1) return s.indexOf(val) + 1;
  }
  // loop through the frequecy counter object
  // the first letter with a frequency of 1 return that index

  return -1;
  // return -1 if no letters had just one
}
