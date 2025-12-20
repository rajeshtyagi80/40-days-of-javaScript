console.log("Day 02");

let name, age, isStudent, favoriteProgrammingLanguage;
let student = {
name: "Mehar Singh",
age: 24,
isStudent: true,
favoriteProgrammingLanguage: "C++"
};

console.log(student.name);
console.log(student.age);
console.log(student.isStudent);
console.log(student.favoriteProgrammingLanguage);

let student_2 = student;
student.name = "Kunal";       // name of student is modified
console.log(student.name);
console.log(student_2.name);

let arr = [1,2,3,4];

arr_2 = arr;
arr = [1,2,3,4,5];           // arr modified
console.log(arr);
console.log(arr_2);


