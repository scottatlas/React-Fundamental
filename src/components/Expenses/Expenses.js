import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterYear, setFilteryear] = useState("2020");

  const filterHandler = (selectYear) => {
    setFilteryear(selectYear);
  };

  const filterExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() === +filterYear
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onChangeFilter={filterHandler} />
        <ExpensesChart expenses={filterExpenses} />
        <ExpenseList items={filterExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
