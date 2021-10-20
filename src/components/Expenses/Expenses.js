import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";

import { useState } from "react";

const Expenses = (props) => {
  const [stateFilteredValue, setstateFilteredValue] = useState("2020");

  const filteredData = props.data.filter(
    (item) => item.date.getFullYear().toString() === stateFilteredValue
  );

  const filterValueHendler = (filteredValue) => {
    setstateFilteredValue(filteredValue);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedValue={stateFilteredValue}
        getFilterValue={filterValueHendler}
      />
      <ExpensesList items={filteredData} />
    </Card>
  );
};

export default Expenses;
