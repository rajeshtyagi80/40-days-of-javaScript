// T-049: Given the array-like object below, access the second element and log it:

const arrayLike = { 0: "First", 1: "Second", length: 2 };
console.log("T-049:",arrayLike[1]);


//  T-050: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.

function convertArgToArray(a, b) {
  console.log("T-050: 'arguments' object:",arguments)
  const funArg = Array.from(arguments);
  console.log("Array from arguments object:",funArg);
}
convertArgToArray(2, 3);


//  T-051: Write a snippet to select all div elements on a webpage (using document.querySelectorAll) and convert the resulting NodeList into an array.

const allTag = document.querySelectorAll("div");
const allTagArray = [...allTag];
console.log("T-051:",allTagArray);

//  T-052: Merge these two arrays into a single array:

const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArray = [...arr1, ...arr2];
console.log("T-052:",mergedArray);


//  T-053: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]
const arrayLikeObj = {
  0: "A",
  1: "A",
  2: "A",
  3: "A",
  4: "A",
  length: 5
};
console.log("T-053: Array from arraylike", Array.from(arrayLikeObj));


//  T-054: Use Array.from to convert a string like "Hello" into an array of characters.

console.log("T-054:", [..."Hello"]);

//  T-055: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'], group words by their first letter using group().

const fruitsArray = ['apple', 'banana', 'apricot', 'mango', 'blueberry'];
const groupedFruits = Object.groupBy(fruitsArray, (fruit) => {
  const newfruit = [...fruit];
  return newfruit[0];
})
console.log("T-055", groupedFruits);

//  T-057: From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method.

const numbersArray = [3, 7, 3, 2, 3, 8, 7, 7];
const uniqueNumbers = [];
const biggestNumbersArray = [];
numbersArray.forEach((num) => {
  if (!uniqueNumbers.includes(num)) uniqueNumbers.push(num);
});

let biggestLength = 1;

uniqueNumbers.forEach(num => {
  const newLength = numbersArray.filter(number => {
    return num === number;
  }).length;
  if (newLength >= biggestLength) {
    if (newLength > biggestLength) {
      biggestLength = newLength;
      biggestNumbersArray.pop();
      biggestNumbersArray.push(num);
    } else {
      biggestNumbersArray.push(num);
    }
  }
});
console.log("T-057 Most repeated numbers are:",);
for (const value of biggestNumbersArray.values()) console.log(value);
biggestNumbersArray.forEach(elem => {
  console.log(`${elem} repeated ${biggestLength} times`);
});


//  T-058: Find the median of [5, 2, 9, 1, 3, 6, 8].

const medianArray = [5, 2, 9, 1, 3, 6, 8];
const len = medianArray.length;
const sorterMedianArray = medianArray.toSorted();
const median = len % 2 === 0 ? (sorterMedianArray[len / 2 - 1] + sorterMedianArray[len / 2]) / 2 : sorterMedianArray[((len + 1) / 2) - 1];
console.log("T-058: Median is", median);


//  T-059: Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s).

const array8 = [['a', 1], ['b', 2], ['c', 3]];
const objArray8 = Object.fromEntries(array8);
console.log("T-059:", objArray8);


//  T-060: Flatten and convert all letters to uppercase in one step using flatMap(). Here is input array: [['a', 'b'], ['c', 'd']].

const array9 = [['a', 'b'], ['c', 'd']];
const arrayInUppercase = array9.flatMap((entries) => {
  return [entries[0].toUpperCase(), entries[1].toUpperCase()];
});
console.log("T-060:", arrayInUppercase);


//  T-061: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']

const fruitArr = ['apple', 'banana', 'apple', 'mango', 'banana', 'banana'];

const uniquefruits = fruitArr.reduce((acc, current) => {
  if (!acc.includes(current)) {
    acc.push(current);
  }
  return acc;
}, []);
console.log("T-061: FruitFrequency")

for (let i = 0; i <= uniquefruits.length - 1; i++) {
  const fruitFrequency = fruitArr.filter(fruit => {
    return fruit === uniquefruits[i];
  }).length
  console.log(uniquefruits[i], "Occurred", fruitFrequency, "times in array");
}


//  T-062: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']

const array10 = ['a', 'b', 'c', 'd', 'e'];
console.log("T-062:", array10.slice(1, 4));

//  T-063: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()
const array11 = [9, 3, 1, 6, 8];
const sortedArray11 = array11.toSorted((a, b) => {
  return a === b ? 0 : a > b ? 1 : -1;
});
console.log("T-063: Sorted array,", sortedArray11);


//  T-064: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse()

const array12 = [1, 2, 3, 4, 5];
console.log("T-064: Reversed array,", array12.toReversed());
// toReversed() method doesn't mutate the original array;


//  T-065: Group the follwing array elements based on age(Adult vs Non-Adult):

const users = [
  { name: 'Alice', age: 55 },
  { name: 'Bob', age: 3 },
  { name: 'Charlie', age: 25 },
];
const groupedUsers = Object.groupBy(users, ({ age }) => {
  return age >= 18 ? "Adult" : "Non-Adult";
})
console.log("T-065: Grouping by age", groupedUsers);


//  T-066: Find the longest word in this sentence using Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".

const sentence = "40 Days of JavaScript by tapaScript is a powerful initiative";
const arrOfWords = sentence.split(" ");
let length = 0;
longestWordsArray = [];
arrOfWords.forEach(word => {
  if (word.length === length) {
    length = word.length;
    longestWordsArray.push(word);
  }
  if (word.length > length) {
    length = word.length;
    longestWordsArray.pop();
    longestWordsArray.push(word);
  }

});
console.log("T-066: Longest word/s is/are", longestWordsArray, "with length", longestWordsArray[0].length,"Character");



//  T-067: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6]

const array13 = [1, 2, 3, 4];
const array14 = [3, 4, 5, 6];
const commonArray = array13.filter((elem) => array14.some((elem2) => elem === elem2));;

console.log("T-067: Common elements are,", commonArray)



