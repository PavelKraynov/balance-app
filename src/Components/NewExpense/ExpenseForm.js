
import './ExpenseForm.css'

function ExpenseForm() {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" required="required" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2021-01-01" max="2022-02-01" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Send</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
