//  Given an array arr of strings, the task is to remove the strings 
//  that are an anagram of an earlier string, then print the remaining 
//   array in sorted order.

function funWithAnagrams(text) {
  // create empty array to hold strings
  let arr = [];

  // make function to check if a word is has an anagram in the array
  function checkForAnagram(word) {
    return arr.some((str) => {
      if (str.length !== word.length) {
        // dont add to array if not the length of a word in the array
        return false;
      }

      // split word passed in into an array and sort it then make it a string again
      // do same and compare it to the word up in the iteration
      return (
        word.split("").sort().toString() === str.split("").sort().toString()
      );
    });
  }

  for (let str of text) {
    //   if array does not already include that word or its anagram push it in
    if (!arr.includes(str) && !checkForAnagram(str)) {
      arr.push(str);
    }
  }

  // return final result array and sort it
  return arr.sort();
}