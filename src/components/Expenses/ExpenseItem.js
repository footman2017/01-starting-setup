import { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHendler = () => {
    setTitle("updated!!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">Rp.{props.amount}</div>
        <button type="button" onClick={clickHendler}>
          Click Here
        </button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
