import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [stateFilteredValue, setstateFilteredValue] = useState("2020");
  const listExpenseItem = props.data.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ));

  const filterValueHendler = (filteredValue) => {
    setstateFilteredValue(filteredValue);
    console.log(stateFilteredValue);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedValue={stateFilteredValue}
        getFilterValue={filterValueHendler}
      />
      {listExpenseItem}
    </Card>
  );
};

export default Expenses;
