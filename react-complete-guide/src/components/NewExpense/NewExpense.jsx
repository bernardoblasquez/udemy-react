import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css';

const NewExpense = (props) => {

    const [toggleForm, setToggleForm] = useState(false);
    let showForm = '';

    const submitDataHandler = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        }

        console.log(`From NewExpense:`)
        console.log(expenseData)
        props.onAddExpense(expenseData) // lifting uo data
    }

    const cancelButtonFormHandler = () =>{
        setToggleForm(false);
    }

    const toggleFormHandler = () =>{
        setToggleForm(!toggleForm)
    }

    if(toggleForm === true){
        showForm = <ExpenseForm onSubmitData={submitDataHandler} onCancelClick={cancelButtonFormHandler} />
    }
    else{
        showForm = <button onClick={toggleFormHandler}>Add New Expense</button>
    }

    return(
        
        <div className="new-expense">
            {showForm}           
        </div>
        
    );
}

export default NewExpense;