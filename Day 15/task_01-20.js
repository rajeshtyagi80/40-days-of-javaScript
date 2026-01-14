// T-001: Create an array of 5 elements using the Array Constructor.

const array1 = new Array(1,2,3,4,5);
console.log("T-001:",array1);


//  T-002: Create an array of 3 empty slots.

const array2 = new Array(3);
console.log("T-002:",array2);


//  T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.

const array3 = ["mango", "apple", "orange", "papaya", "grapes", "banana"];
console.log("T-003:",array3[array3.length - 3]);


//  T-004: Use the for loop on the above array to print elements in the odd index.

for (i = 1; i <= array3.length -1; i += 2 ) {
console.log("T-004:",array3[i]);
}


//  T-005: Add one element at the front and the end of an array.

array3.push("pineapple");
array3.unshift("watermelon");
console.log("T-005:",array3);


//  T-006: Remove an element from the front and the end of an array.

array3.shift();
array3.pop();
console.log("T-006:",array3);


//  T-007: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the
//  array using destructuring.

const favFood = ["alooParatha","makkiKiRoti","saag","kadhi","kaddu","cheese","masriKiDaal","rajma","whiteChole","rice"]
const [,,,,,mostFavFood] = favFood;
console.log("T-007:",mostFavFood);


//  T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.

const [,,...rest] = favFood;
console.log("T-008:",rest);


//  T-009: Clone an Array(Shallow cloning)

const copyFavFood = favFood.slice();
console.log("T-009:",copyFavFood);


//  T-010: Empty an array using its length property

favFood.length = 0;
console.log("T-010:",favFood);


//  T-011: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array.
//  Hint: Use for-loop.

const array4 = [1,2,3,4,5,6,7,8,9,10];
for (i = 0; i <= array4.length  - 1; i++) {
    if( array4[i] === 5) 
        array4.length = 6;
}
console.log("T-011:",array4);


//  T-012: Create an Array of 10 elements. Use the splice() method to empty the array.

const array5  = [1,2,3,4,5,6,7,8,9,10];
array5.splice(0,10);
console.log("T-012:",array5);


//  T-013: Create an Array of 10 elements. You can empty the array in multiple ways: using the length property, using the pop() method,
//  using the shift() method, setting the array with [], or the splice() method. Which among these methods are most efficient and why?

// Answer: using length property is the most efficient method.
//         all methods except using the length property and setting the array with [], require multiple calculations.
//         and problem with setting the array with [] is: you cannot set array with [] if you have created that array with const keyword.


//  T-014: What happens when you concatenate two empty arrays?

// Answer: It returns new empty array.
 

//  T-015: How can you check if a value is partially matching with any of the elements of an Array?

// Answer: using join method we join all element of an array. This way we get a string, then we comapre this string with our given value
//         using include method of string.


//  T-016: What is the difference between the slice() and splice() methods?

// Answer: slice() is used to create copy of an array or copy part of an array,
//         whereas splice() is used to modify an array, it changes the original array.


//  T-017: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in
//  an immutable way such that the source array never gets modified.

const originalUnsortedArray = ["ad23","ae32","32aa","5ks3","nk53","ki4k","tt3i"];
const sortedAscending = originalUnsortedArray.slice();
const sortedDescending = originalUnsortedArray.slice();

sortedAscending.sort(function(a,b){
    return a === b ? 0 : a < b ? -1 : 1; 
});
sortedDescending.sort(function(a,b){
    return a === b ? 0 : a < b ? 1 : -1; 
});
console.log("T-017:",originalUnsortedArray,sortedAscending,sortedDescending);


//  T-018: Can you give examples of sparse and dense arrays?

// Answer: A dense array is a normal array where the indices hold value. arr = [1, 2, 3];
//         A sparse array have holes and not all indices hold value. arr = [1,2,,,,3] This array has 3 empty elements.


//  T-019: Give a practical usages of the .fill() method

    const array6 = ["red","white","blue","orange"]
    array6.fill("pink",1,3);
    console.log("T-019:",array6);


//  T-020: How to convert an array to a string?

// Answer: Using for loop we can take elements form an array one by one and concat them using string cocat method.

const array7 = ["ram","shyam","govind","raman","pran","gopal"]
let string = "";
for (i = 0; i < array7.length; i++) {
    string = string.concat(array7[i]);
}
console.log("T-020:",string);
console.log(string === "ramshyamgovindramanprangopal");


