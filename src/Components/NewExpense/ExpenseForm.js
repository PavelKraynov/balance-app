import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [inputForm, setInputForm] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (e) => {
    setInputForm((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
  };
  const amountChangeHandler = (e) => {
    setInputForm((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
  };
  const dateChangeHandler = (e) => {
    setInputForm((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });
  };
  const submitHandlerForm = (e) => {
    e.preventDefault();
    const expenseData = {
      title: inputForm.enteredTitle,
      amount: inputForm.enteredAmount,
      date: new Date(inputForm.enteredDate)
    };
    props.onSaveExpenseData(expenseData);
    setInputForm({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
  };

  return (
    <form onSubmit={submitHandlerForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            required="required"
            onChange={titleChangeHandler}
            value={inputForm.enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            required="required"
            onChange={amountChangeHandler}
            value={inputForm.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2022-02-01"
            onChange={dateChangeHandler}
            value={inputForm.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Send</button>
      <button onClick={props.changeOnClickForm} type="button">
        Cancel
      </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
