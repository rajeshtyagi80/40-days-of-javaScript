// Create a createExpenseTracker() function that takes a username and an initial budget to expose the following functioanlities:

// Adding Expense
// Removing Expense
// Updating Expense
// Getting total expenses done by the user
// Getting expense by category
// Get the Highest Expense
// Get the Lowest Expense
// Get the user info
// Show all the expenses
// Update User data
// Please make use of the factory function, closure to keep data private and return only the required features/methods.
//     { id: 1, amount: 200, category: "Food", description: "Lunch" },
//     { id: 2, amount: 500, category: "Shopping", description: "New Shoes" },



function expenseTracker(userName, initialBudget) {
  const user = {
    name: userName,
    budget: initialBudget,

  };
  let updateExpense;
  const expenses = [];
  let id = 0;

  return {
    addExpense: (amount, category, description = "not available") => {
      if (user.budget >= amount) {
        id++;
        expenses.push({ id: id, amount: amount, category: category, description: description });
        console.log("Expense Created:", expenses[expenses.length - 1]);
      } else console.warn("Insufficent Budget: Add Budgeet")
      user.budget = user.budget - amount;
    },
    removeExpense: (id) => {
      if (expenses.some(expense => expense.id === id)) {
        user.budget = user.budget + expenses.find(expense => { return expense.id === id; }).amount;
        console.log("Expence removed:", expenses.splice(expenses.findIndex(expense => {
          return expense.id === id;
        }), expenses.find(expense => {
          return expense.id === id;
        }) ? 1 : 0))
      } else { console.log("Cannot remove expense: Invalid id") }

    },
    updateExpense: (id, amount = 0, category = "", description = "") => {
      if (amount) {
        user.budget = user.budget + expenses.find(expense => { return expense.id === id; }).amount - amount;
      }
      const updateExpense = expenses.map(expense => {
        if (expense.id === id) {
          expense.amount = amount ? amount : expense.amount;
          expense.category = category ? category : expense.category;
          expense.description = description ? description : expense.description;
        }
        return expense;
      })

    },
    totalExpenses: () => {
      const totalExpenses = expenses.reduce((accumulator, currentValue) => {
        accumulator = accumulator + currentValue.amount;
        return accumulator;
      }, 0);
      console.log("Total expenses:", totalExpenses);

    },
    expenseByCategory: () => {
      const expenseByCategory = Object.groupBy(expenses, ({ category }) => category);
      console.log("Expenses grouped by category:", expenseByCategory);
    },
    highestExpense: () => {
      highestExpenseCollection = expenses.toSorted((a, b) => {
        return b.amount - a.amount;

      })
      const topCollection = highestExpenseCollection.filter(expense => {
        return expense.amount === highestExpenseCollection[0].amount;

      })

      console.log("Highest expenses:", highestExpenseCollection[0].amount, topCollection);

    },

    lowestExpense: () => {
      lowestExpenseCollection = expenses.toSorted((a, b) => {
        return a.amount - b.amount;

      })
      const topCollection = lowestExpenseCollection.filter(expense => {
        return expense.amount === lowestExpenseCollection[0].amount;

      })

      console.log("Lowest expenses:", lowestExpenseCollection[0].amount, topCollection);
    },

    userInfo: () => {
      console.log("Name:", user.name, ", Available budget", user.budget);
    },

    addBudget: (addBudget) => {
      user.budget = user.budget + addBudget;
      console.log("Budget updated: Avaliable budget,", user.budget);
    },
    allExpenses: () => {
      console.log("All expenses:", expenses);
    }

  }
}



const tapasExpenses = expenseTracker("Tapas", 6000);
tapasExpenses.addExpense(300, "Food", "Dinner");
tapasExpenses.addExpense(300, "Food", "Lunch");
tapasExpenses.addExpense(400, "Shopping", "Shoes");
tapasExpenses.addExpense(400, "Shopping", "Shirt");
tapasExpenses.addExpense(200, "Food", "Break Fast");
tapasExpenses.addExpense(100, "Rent", "Car");
tapasExpenses.addExpense(200, "Bill", "Gas");
tapasExpenses.removeExpense(2);
tapasExpenses.removeExpense(2);
tapasExpenses.addExpense(300, "Rent", "Hotel");
tapasExpenses.updateExpense(6, 0)
tapasExpenses.expenseByCategory()
tapasExpenses.totalExpenses()
tapasExpenses.highestExpense()
tapasExpenses.lowestExpense()
tapasExpenses.userInfo()
tapasExpenses.addBudget(1000)
tapasExpenses.allExpenses()