import { useState } from "react";

import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter'
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from './ExpensesChart'

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022')
    const filterChangeHandler = (changeYear) => {
      setFilteredYear(changeYear);
      console.log("changeYear", changeYear);
    }
const filteredOfDateArray = props.item.filter(expense => {
 return (
        filteredYear ===
        expense.date.toLocaleString("en-RU", { year: "numeric" })
      )
})

return (
  <Card className="expenses">
    <ExpensesFilter
      selected={filteredYear}
      filterChangeHandler={filterChangeHandler}
    />
    <ExpensesChart expenses={filteredOfDateArray} />
    {filteredOfDateArray.length === 0 && <p> No expenses found</p>}
    {filteredOfDateArray.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    })}
  </Card>
);
}

export default Expenses;
