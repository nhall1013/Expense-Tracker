init();

function init(){
    const budgetButton = document.getElementById('budget-button');
    budgetButton.addEventListener('click', budgetEvent);
    const expenseButton = document.getElementById('expense-button');
    expenseButton.addEventListener('click', expenseEvent);
}

function budgetEvent(){
    const budgetValue = parseInt(document.getElementById('budget-value').value);
    displayBudget(budgetValue);
    displayRemaining(budgetInput);
}

function expenseEvent(){
    const expenseName = document.getElementById('expense-name').value;
    const expenseValue = parseInt(document.getElementById('expense-value').value);
    const expenseList = document.getElementById('expense-list');
    updateExpenses(expenseValue);
    addExpenseItem(expenseList, expenseName, expenseValue);
    updateRemaining();
}
