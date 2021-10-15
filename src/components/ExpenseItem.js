import './ExpenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date();
  const expenseTitle = 'Asuransi Mobil';
  const expenseAmount = 1000000;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>Rp.{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
