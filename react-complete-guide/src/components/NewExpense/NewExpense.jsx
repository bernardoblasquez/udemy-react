import ExpenseForm from './ExpenseForm'
import './NewExpense.css';

const NewExpense = (props) => {

    const submitDataHandler = (enteredExpense) => {

        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        }

        console.log(`From NewExpense:`)
        console.log(expenseData)
        props.onAddExpense(expenseData) // lifting uo data
    }

    return(
        
        <div className="new-expense">
            <ExpenseForm onSubmitData={submitDataHandler}/>            
        </div>
        
    );
}

export default NewExpense;