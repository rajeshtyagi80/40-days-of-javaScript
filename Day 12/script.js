//1. What will be the output and why?

const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");

//Output: Not provided.
//EXplanation: Nullish coalescing operator is used. Which gives right hand side value if left hand side is null or undefined.




// 2. What will happen if we try to modify a frozen object?

const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);

// Output: 1
// We cann't modify a frozen object



// 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring

const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};

//const name = person.name;

const {name, company: {name: companyName}, company: {location: {city}}} = person;
console.log(name, "is working in", companyName, "situated in", city,);





// 4. Build a Student Management System
// Store student details in an object (name, age, grades).
// Implement a method to calculate the average grade.

const student = {
    name: "Prakash",
    age: 12,
    grades: {
        english: 87,
        math: 88,
        science: 92,
        hindi: 82,
        socialScience: 76
    }

};
const {name: studentName, grades} = student;
let sum = 0, count = 0, averageGrade;

for (let key in grades){
    count++;
    sum = sum + grades[key];

}

averageGrade = sum/count;

console.log(studentName, "Average grade is", averageGrade);



// 5. Book Store Inventory System
// Store books in an object.
// Add functionality to check availability and restock books.

let books = {
    "ulysses": 3,
    "the great gatsby": 2,
    "lolita": 1,
    "brave new world": 0,
    "catch-22": 4,
    "darkness at noon": 3
}

//Check book in Inventory
const bookName = "lolita";
const hasBook = Object.hasOwn(books, bookName);
if (hasBook)   {
  console.log("Have", books[bookName], "Copies of book:", bookName);
}
else  {
  console.log("Never had this book in stock:", bookName);
}

// Add Book to Inventory
const addBook = "great game", copies = 5;
const checkBook = Object.hasOwn(books, addBook);
if (checkBook) {
  let totalCopies = books[addBook] + copies;
  books[addBook] = totalCopies;

}
else {
  books[addBook] = copies;
}
console.log(books);





// 6. What is the difference between Object.keys() and Object.entries()? Explain with examples

// Object.keys() method is used to get all the properties of an object in an array, whereas Object.entries() is used to
// create an array of an array of each property and value of an object.




// 7. How do you check if an object has a certain property?

// There is a method hasOwn() of an object to check for a property. Syntax: Object.hasOwn(nameOfObject, property);




// 8. What will be the output and why?

const SomePerson = { name: "John" };
const newPerson = SomePerson;
newPerson.name = "Doe";
console.log(SomePerson.name);

// Output: "Doe"
// Explanation: Object is a non-primitive data. Non-primitive data is passed by reference not by value.




// 9. What’s the best way to deeply copy a nested object? Expalin with examples

// Answer: structuredClone method is the best way to deeply copy a nested object.

const obj1 = {
  a: 1,
  b: {
    c: 2
  }
}

const obj2 = structuredClone(obj1);

obj2.b.c = 5;
// we have changed property "c" value in target object without affecting source object.
console.log(obj1.b.c);
console.log(obj2.b.c);




// 10. Loop and print values using Object destructuiring

const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];

for ( let {name, address, age} of users){
  console.log(name, "Lives in", address, "has age", age);
}

