import { useState } from "react";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [selectedFilter, setSelectedFilter] = useState('2023');

  const onFilterChangedHandler = selectedItem => {
    setSelectedFilter(selectedItem);
  }

  const filteredExpenses = props.items.filter(item => {
    return item.date.getFullYear().toString() === selectedFilter;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter 
          onFilterChanged={onFilterChangedHandler} 
          defaultFilter={selectedFilter}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;