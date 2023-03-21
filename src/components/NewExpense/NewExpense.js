import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsForm(false);
  };

  const [isForm, setIsForm] = useState(false);

  const showFormHandler = () => {
    setIsForm(true);
  };

  const cancelFormHandler = () => {
    setIsForm(false);
  };

  return (
    <div className="new-expense">
      {!isForm && <button onClick={showFormHandler}>Add New Expense</button>}
      {isForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
