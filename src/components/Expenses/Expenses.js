import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [stateFilteredValue, setstateFilteredValue] = useState("2020");

  const filteredData = props.data.filter(
    (item) => item.date.getFullYear().toString() === stateFilteredValue
  );

  const listExpenseItem = filteredData.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ));

  const filterValueHendler = (filteredValue) => {
    setstateFilteredValue(filteredValue);
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
