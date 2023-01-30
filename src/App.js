import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";

const INITIAL_EXPENSES = [
  { id: 'e1', date: new Date(2022, 5, 15), title: "Car Insurance", amount: 294.67 },
  { id: 'e2', date: new Date(2022, 5, 16), title: "New TV", amount: 600 },
  { id: 'e3', date: new Date(2022, 5, 17), title: "Gym", amount: 50 },
  { id: 'e4', date: new Date(2022, 5, 18), title: "Vacations", amount: 700 },
  { id: 'e5', date: new Date(2022, 5, 19), title: "Gift", amount: 700 },
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
