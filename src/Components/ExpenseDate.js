import './ExpenseDate.css'
const ExpenseDate = (props) => {
  return (
    <div>
      <div>{props.date.toLocaleString("en-RU", { month: "long" })} </div>
      <div>{props.date.toLocaleString("en-RU", { day: "numeric" })}</div>
      {props.date.toLocaleString("en-RU", { year: "numeric" })}
    </div>
  );
}


export default ExpenseDate;
