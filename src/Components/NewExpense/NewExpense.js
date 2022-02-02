import { useState } from "react/cjs/react.development";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  const [visibleButton, setVisibleButton] = useState(false);
  const changeOnClickForm = () => {
    setVisibleButton(!visibleButton);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpenseHandler(expenseData);
    // setVisibleButton(!visibleButton);
  };
  return (
    <div className="new-expense">
      {!visibleButton && (
        <button type="button" onClick={changeOnClickForm}>
          New Expense Form
        </button>
      )}
      {visibleButton && (
        <ExpenseForm
          changeOnClickForm={changeOnClickForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
