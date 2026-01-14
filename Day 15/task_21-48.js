// employees array: An array of emplyees working in a department.

const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

// departments array: An array of departments where emplyees work.

const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];


// T-021: Can you filter employees who work in the "Engineering" department?

const enginners = employees.filter((employee) => {
   return employee.departmentId === 2;
})
console.log("T-021: Engineers List", enginners);


//  T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)".

const namedepartment = employees.map(employee => {
  let department;
  switch (employee.departmentId) {
    case 1: department = "(HR)"; break;
    case 2: department = "(Engimeering)"; break;
    case 3: department = "(Marketing)"; break;
    case 4: department = "(Sales)";
  }
  return `${employee.name} ${department}`;

});
console.log("T-022:",namedepartment);


//  T-023: Find the highest salary among employees.

let highestSalary = 0;
employees.forEach((employee) => {
  if (highestSalary < employee.salary) highestSalary = employee.salary;
})
console.log("T-023: Highest Salary", highestSalary);


//  T-024: Check if there is at least one employee in the "Sales" department.

const AtLeastOneInSales = employees.some((employee) => {
  return employee.departmentId === 4;
})
console.log("T-024: At least one employee in sales department ", AtLeastOneInSales);


//  T-025: Write a function to filter employees earning more than 6000.

const empEarnMoreThan6000 = employees.filter((employee) => {
  return employee.salary > 6000;
})
console.log("T-025: Employees earning more than $6000", empEarnMoreThan6000);


//  T-026: Create an array of employee names only.

const employeeNames = employees.map((employee) => {
  return employee.name;
})
console.log("T-026: Employees Name", employeeNames);


//  T-027: Calculate the total salary of all employees.

const totalSalary = employees.reduce((accumlator, employee) => {
  accumlator = accumlator + employee.salary;
  return accumlator;
}, 0);
console.log("T-027: Total salary of all employees $", totalSalary);


//  T-028: Is there any employee earning less than 5000?

const empEarnLessThan5000 = employees.some((employee) => {
  return employee.salary < 5000;
})
console.log("T-028: Any employee earning less than $5000", empEarnLessThan5000);


//  T-029: Find the first employee who earns exactly 5100.

const empEarn5100 = employees.find((employee) => {
  return employee.salary === 5100;
});
console.log("T-029: First employee earning exactly $5100", empEarn5100);


//  T-030: Find the last employee in the "HR" department.

const empLastInHR = employees.findLast((employee) => {
  return employee.departmentId === 1;
});
console.log("T-030: Last employee in HR department", empLastInHR);


//  T-031: Find the first employee in the "Marketing" department.

const empFirstInMarketing = employees.find((employee) => {
  return employee.departmentId === 3;
});
console.log("T-031: First employee in Marketing department", empFirstInMarketing);


//  T-032: Check if all employees earn more than 4000.

const AllEarningMoreThan4000 = employees.every((employee) => {
  return employee.salary > 4000;
});
console.log("T-032: Is all earning more than $4000 ?", AllEarningMoreThan4000);


//  T-033: Find the first employee in the "Sales" and "HR" department.

const empFirstInSales = employees.find((employee) => {
  return employee.departmentId === 4;
});
console.log("T-033: First employee in Sales department:", empFirstInSales);

const empFirstInHR = employees.find((employee) => {
  return employee.departmentId === 1;
});
console.log("First employee in HR department:", empFirstInHR);


//  T-034: Verify if all employees belong to a department listed in the departments array.

const AllListedInDepartmentArray = employees.every((employee) => {
  return employee.departmentId <= 4 && employee.departmentId >= 1;
});
console.log("T-034: Is all belong to listed departments ?", AllListedInDepartmentArray);


//  T-035: Log each employee's name and department name to the console.

employees.forEach((employee) => {
  let department;
  switch (employee.departmentId) {
    case 1: department = "HR"; break;
    case 2: department = "Engimeering"; break;
    case 3: department = "Marketing"; break;
    case 4: department = "Sales";
  }
  console.log(`T-035: ${employee.name}: ${department}`);

});


//  T-036: Extract all employee names into a single array. (same as 26)

const employeeNames2 = employees.map((employee) => {
  return employee.name;
})
console.log("T-036: Employees Name", employeeNames2);


// T-037: Increment each employee's salary by 10%

const salaryIncrement = employees.map((employee) => {
  const obj = Object.assign({}, employee);
  obj.salary = obj.salary + obj.salary * 0.1;
  return obj;
});
console.log("T-037: Salary Incremented by 10%", salaryIncrement);


//  T-038: Assume each employee can have multiple skills. Create an array of employee skills and flatten them.
//  Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].

const skills = [
  { name: "Alice", skills: ["Excel", "Management"] },
  { name: "Bob", skills: ["Powerpoint", "Management"] },
  { name: "Diana", skills: ["Javascript", "Word"] },
  { name: "Edward", skills: ["Excel", "Python", "c++"] },
  { name: "Fiona", skills: ["Rust", "Outlook", "Javascript"] }
];

const employeeSkills = skills.map((employee) => {
  return employee.skills;
}).flat();
console.log("T-038: Array of employee's skills", employeeSkills)


//  T-039: Find the total salary of all employees working in the "Engineering" department.

const totalSalaryOfEngineers = employees.reduce((accumlator, employee) => {
  if (employee.departmentId === 2) {
    accumlator = accumlator + employee.salary;
  }
  return accumlator;
}, 0);
console.log("T-039: Total salary of all Engineers $", totalSalaryOfEngineers);


//  T-040: Check if there is any department where all employees earn more than 5000.

for(let i = 1; i <= 4; i++){
  let department;
  switch (i) {
    case 1: department = "HR"; break;
    case 2: department = "Engimeering"; break;
    case 3: department = "Marketing"; break;
    case 4: department = "Sales";
  }
  const departmentAllEmpEarnMoreThan5000 = employees.filter((employee) => {
    return employee.departmentId === i;
  }).every((employee) => {
    return employee.salary > 5000;
  });
  if (departmentAllEmpEarnMoreThan5000) {
    console.log("T-040: In", department, "all employees earn more than $5000");
  }
}


//  T-041: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }).
//  Find the total number of unique projects being handled across all employees.

const projectsArray = [
  { id: 1, name: "Alice", projects: ["Project A", "Project B"] },
  { id: 2, name: "Bob", projects: ["Project C", "Project B"] },
  { id: 3, name: "Diana", projects: ["Project D", "Project A"] },
  { id: 4, name: "Edward", projects: ["Project E", "Project F"] },
  { id: 5, name: "Fiona", projects: ["Project C", "Project B"] }
]

const OnlyProjectsAraay = projectsArray.flatMap((employee) => {
  return employee.projects;
});

const uniqueProject = [];
OnlyProjectsAraay.forEach((elem) => {
  if(!uniqueProject.includes(elem)) uniqueProject.push(elem);
});
console.log("T-041: Total number of unique projects", uniqueProject.length)


//  T-042: For each employee, find their department name and return an array of employee names with their department names.
const arrEmpNameDeparName = employees.map(employee => {
    return {
      name: employee.name,
      department: departments.find(person => {
        return employee.departmentId === person.id
      }).name
    };
});
console.log("T-042:", arrEmpNameDeparName);


//  T-043: Get a list of names of employees earning more than 6000.

const empListEarningMoreThan600 = employees.filter(employee => {
  return employee.salary > 6000
}).map(employee => {
   return employee.name
  });
console.log("T-043: Name of employees earnign more than $6000", empListEarningMoreThan600);

//  T-044: Write a for-of loop to print the names of all employees from the employees array.

console.log("Task-044: Name of all employees");
for(const employee of employees){
  console.log(employee.name);
};


//  T-045: Using a for-of loop, print the names of employees earning more than 5000.

console.log("Task-045: Name of all employees earning more than $5000");
for(const employee of employees){
  if (employee.salary > 5000) console.log(employee.name);
};


//  T-046: Modify the for-of loop to destructure each employee object and log their name and salary.
console.log("Task-046: Name of all employees and their salary");

for(const{name, salary} of employees) console.log(name,",","Salary:", salary);


//  T-047: Write a for-of loop to match employees with their departments and print the results.

console.log("Task-047: Matching employees with their departments");
for(const{name, departmentId} of employees) {
  for(const{id, name: department} of departments){
    if( departmentId === id) console.log(name,department);
  };
  };


//  T-048: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.

console.log("Task-048: Index and name of each employee");
const arrItr = employees.entries();
for(const [index, employee] of arrItr) {
  console.log(index,employee.name);
}
