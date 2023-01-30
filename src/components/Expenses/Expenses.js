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

  return (
    <Card className='expenses'>
      <ExpensesFilter 
        onFilterChanged={onFilterChangedHandler} 
        defaultFilter={selectedFilter}
      />
      {filteredExpenses.map(expense => <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />)}
    </Card>
  );
}

export default Expenses;