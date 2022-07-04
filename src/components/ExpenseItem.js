import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [expenseTitle, setExpenseTitle] = useState(props.expense.title);
  
  const expenseAmount = props.expense.amount;
  const clickHandler = () => {
    setExpenseTitle("Working");
  };
  return (
    <div className="expenseContainer">
      <div className="expense-item">
        <ExpenseDate date={props.expense.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">Rs. {expenseAmount}</div>
          <button onClick={clickHandler}>Change Title</button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
