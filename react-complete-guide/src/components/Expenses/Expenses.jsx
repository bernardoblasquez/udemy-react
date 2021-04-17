import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.listOfExpenses.map((expense) => (

        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
        
      ))}
    </Card>
    
  );
}

export default Expenses;
