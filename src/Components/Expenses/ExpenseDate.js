import './ExpenseDate.css'
const ExpenseDate = (props) => {
  return (
    <div className="expense-item__date">
      <div>{props.date.toLocaleString("en", { month: "long" })} </div>
      <div>{props.date.toLocaleString("en", { day: "numeric" })}</div>
      {props.date.toLocaleString("en", { year: "numeric" })}
    </div>
  );
}


export default ExpenseDate;
