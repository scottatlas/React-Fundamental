import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");
  const [input, setInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    setInput((previousState) => {
      return {
        ...previousState,
        enteredTitle: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    setInput((previousState) => {
      return {
        ...previousState,
        enteredAmount: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    setInput((previousState) => {
      return {
        ...previousState,
        enteredDate: event.target.value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: input.enteredTitle,
      amount: input.enteredAmount,
      date: new Date(input.enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    clear();
  };

  const clear = () => {
    setInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense-control">
          <label>Title</label>
          <input
            type="text"
            value={input.enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense-control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={input.enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense-control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-3-31"
            value={input.enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
