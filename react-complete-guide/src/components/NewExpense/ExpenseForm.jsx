import React, { useState } from 'react'
import "./ExpenseForm.css";

const ExpenseForm = () => {
  
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmout] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(expenseData)
    }

    const titleChangeHandler = (event) => {
       setEnteredTitle(event.target.value)
    }

    const amoutChangeHandler = (event) => {
       setEnteredAmout(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input 
            type="text" 
            onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amout</label>
          <input 
            type="number"
            onChange={amoutChangeHandler} 
            min="0.01" 
            step="0.01" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input 
            type="date" 
            onChange={dateChangeHandler}
            min="2019-01-01" 
            max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;

/* Como salvar de forma correta uma variável que rgerencia todos os estados

const [userInput, setUserInput] = useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:''
})

const titleChangeHandler = (event) => {
    setUserInput((prevSate) => {
        return {
            ...prevSate, 
            enteredTitle: event.target.value
        }
    });
}

*/

