import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";

function Expenses(props) {
  const [filterYear, setFilteryear] = useState("2020");

  const filterHandler = (selectYear) => {
    setFilteryear(selectYear);
  };

  const filterExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() === +filterYear
  );

  return (
    <div>
      <ExpensesFilter selected={filterYear} onChangeFilter={filterHandler} />
      <Card className="expenses">
        {filterExpenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filterExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
}

export default Expenses;
