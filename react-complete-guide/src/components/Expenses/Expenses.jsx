import { useState } from 'react'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter'
import Card from "../UI/Card";
import "./expenses.css";

const Expenses = (props) => {

  const [selectedYear, setSelectedYear] = useState('All_Years');
  let filteredListOfExpenses = [];
  let listOfExpenses = [];

  const changeSelectHandler = (selectedYear) => {
    console.log(`[Expenses Component]: variable from ExpensesFilter ${selectedYear}`);
    setSelectedYear(selectedYear);
  }

  if(selectedYear !== 'All_Years'){ //filter returns a new array
    filteredListOfExpenses = props.listOfExpenses.filter(expense => {
      return expense.date.getFullYear().toString() === selectedYear
    })
  }
  else{
    filteredListOfExpenses = [...props.listOfExpenses]
  }

  if (filteredListOfExpenses.length === 0){
    listOfExpenses = <p>Sem gastos</p>;
  } 
  else{
    listOfExpenses = (
      filteredListOfExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
    )
  }

  return (

    <Card className="expenses">
      <ExpensesFilter 
        defaultYear={selectedYear} 
        onChangeSelect={changeSelectHandler} />
      
      {listOfExpenses}
    </Card>
    
  );
}

export default Expenses;
