import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";

const INITIAL_EXPENSES = [
  { id: 'e1', date: new Date(2020, 7, 15), title: "Car Insurance", amount: 294.67 },
  { id: 'e2', date: new Date(2021, 6, 16), title: "New TV", amount: 600 },
  { id: 'e3', date: new Date(2021, 8, 17), title: "Gym", amount: 50 },
  { id: 'e4', date: new Date(2022, 5, 18), title: "Vacations", amount: 700 },
  { id: 'e5', date: new Date(2023, 1, 19), title: "Gift", amount: 700 },
  { id: 'e6', date: new Date(2023, 2, 23), title: "New Laptop", amount: 2899 },
  { id: 'e7', date: new Date(2023, 1, 29), title: "Gym", amount: 999 },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses([expense, ...expenses]);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
