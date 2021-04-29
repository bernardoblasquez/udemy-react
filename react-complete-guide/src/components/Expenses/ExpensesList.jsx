import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";



const ExpensesList = (props) => {

    if (props.listOfExpenses.length === 0){
        return <h2 className="expenses-list__fallback ">No expenses</h2>;
    } 
    
    if (props.listOfExpenses.length > 0) {
        return(
            <ul className="expenses-list">
                {
                    props.listOfExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))  
                }
            </ul> 
        )
    }
}

export default ExpensesList;