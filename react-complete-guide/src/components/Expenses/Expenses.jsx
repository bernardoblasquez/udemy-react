import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from "../UI/Card";
import "./expenses.css";

const Expenses = (props) => {

  const [selectedYear, setSelectedYear] = useState('2021');
  let filteredListOfExpenses = [];

  const changeSelectHandler = (selectedYear) => { // lifting the state up
    console.log(`[Expenses Component]: variable from ExpensesFilter ${selectedYear}`);
    setSelectedYear(selectedYear);
  }

  filteredListOfExpenses = props.listOfExpenses.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear
  })


  return (

    <Card className="expenses">
      <ExpensesFilter 
        defaultYear={selectedYear} 
        onChangeSelect={changeSelectHandler} />
      
      <ExpensesChart expenses={filteredListOfExpenses}/>
      <ExpensesList listOfExpenses={filteredListOfExpenses} />
    </Card>
    
  );
}

export default Expenses;
