import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setenteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setenteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value);
  };

  const submitHendler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    setenteredTitle("");
    setenteredAmount("");
    setenteredDate("");
  };

  return (
    <div>
      <form onSubmit={submitHendler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              step="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="expense__actions">
          <button type="submit">Add expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
