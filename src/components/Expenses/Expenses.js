import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [selectedFilter, setSelectedFilter] = useState('2023');

  const onFilterChangedHandler = selectedItem => {
    setSelectedFilter(selectedItem);
  }

  const filteredExpenses = props.items.filter(item => {
    return item.date.getFullYear().toString() === selectedFilter;
  });

  let expensesContent = <p>No expenses found.</p>;
  
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(expense => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    ));
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter 
          onFilterChanged={onFilterChangedHandler} 
          defaultFilter={selectedFilter}
        />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;