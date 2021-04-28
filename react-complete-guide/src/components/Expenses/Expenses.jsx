import { useState } from 'react'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter'
import Card from "../UI/Card";
import "./expenses.css";

const Expenses = (props) => {

  const [selectedYear, setSelectedYear] = useState('');
  let printListOfExpenses = []

  const changeSelectHandler = (selectedYear) => {
    console.log(`[Expenses Component]: variable from ExpensesFilter ${selectedYear}`);
    setSelectedYear(selectedYear);
  }

  if(selectedYear !== ''){ //filter returns a new array
    printListOfExpenses = props.listOfExpenses.filter(expense => {
      return expense.date.getFullYear().toString() === selectedYear
    })
  }
  else{
    printListOfExpenses = [...props.listOfExpenses]
  }

  return (

    <Card className="expenses">
      <ExpensesFilter defaultYear={selectedYear} onChangeSelect={changeSelectHandler} />
      {
        printListOfExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      }
    </Card>
    
  );
}

export default Expenses;
