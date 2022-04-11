// Given two strings, write a function to determine
// if the second string is an anagram of the first. An 
// Anagram is a word, phrase, or name formed by rearanging
// the letters of another, such as cinema formed from iceman

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let counter1 = {};
  let counter2 = {};

  for (let num in str1) {
    let letter = str1[num];
    counter1[letter] ? (counter1[letter] += 1) : (counter1[letter] = 1);
  }

  for (let num in str2) {
    let letter = str2[num];
    counter2[letter] = (counter2[letter] || 0) + 1;
  }

  for (let val of str2) {
    if (!counter1[val]) return false;
    if (counter1[val] !== counter2[val]) return false;
  }
  return true;
}

validAnagram("heosdspps", "sesdsppoh");