import { useState } from "react";

import "./ExpenseItem.css";

import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title)

  const clickHandlerTitle = () => {
    setTitle('hi')
  }
  return (
    <Card className="expense-item">

      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{props.title && title}</h2>
        <div className="expense-price">{props.amount}</div>
        <button type="button" onClick={clickHandlerTitle}>
          click
        </button>
      </div>
    </Card>
  );
}

export default ExpenseItem;