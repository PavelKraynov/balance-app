import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  console.log('props',props)
  const filterChangeHandler = (e) => {
    return props.filterChangeHandler(e.target.value);
  };
  const year = new Date().toLocaleString("en-RU", { year: "numeric" });
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterChangeHandler}>
          <option value={year}>{year}</option>
          <option value={year - 1}>{year - 1}</option>
          <option value={year - 2}>{year - 2}</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
