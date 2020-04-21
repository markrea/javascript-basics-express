const getNthElement = (index, array) => {
  return array[index % array.length];

};

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  const deletedItem =  array.splice(index, 1);
  return array;
}
const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
 return strings.map(a =>a.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(function(newString) {return newString.split("").reverse().join("")});
};

const onlyEven = numbers => {
  return numbers.filter(numbers => numbers % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
const vowels = ['a', 'e', 'i', 'o', 'u'];
  return strings.filter(word => {
    const beginsWith = word[0].toLowerCase();
    return vowels.includes(beginsWith);
  });
};

const removeSpaces = string => {
  return string.split(" ").join("");
};

const sumNumbers = numbers => {
  return numbers.reduce((total, amount) => total + amount);
  
};

const sortByLastLetter = strings => {
  const reverseStrings = (string) => string.split("").reverse().join("");
  return strings.map(reverseStrings).sort().map(reverseStrings);
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};