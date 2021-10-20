import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
  const [showForm, setshowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setshowForm(false);
  };

  const showFormHandler = () => {
    setshowForm(true);
  };

  const bttnCancelHandler = () => {
    setshowForm(false);
  };

  if (showForm === true) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={bttnCancelHandler}
        />
      </div>
    );
  }

  return (
    <div className="new-expense">
      <button type="button" onClick={showFormHandler}>
        Add New Expense
      </button>
    </div>
  );
};

export default NewExpense;
