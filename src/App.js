import ExpenseItem from "./components/ExpenseItem";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: 1,
      date: new Date(),
      title: "Credit Card Bill",
      amount: 4700,
    },
    {
      id: 2,
      date: new Date(2021, 2, 4),
      title: "Subscription Bill",
      amount: 700,
    },
    { id: 3, date: new Date(2020, 3, 9), title: "Grocery Bill", amount: 900 },
  ];
  return (
    <div className="mainContainer">
      <div className="topSpace">
        <NewExpense></NewExpense>
        <ExpenseItem expense={expenses[0]}></ExpenseItem>
        <ExpenseItem expense={expenses[1]}></ExpenseItem>
        <ExpenseItem expense={expenses[2]}></ExpenseItem>
      </div>
    </div>
  );
}

export default App;
