function displayBudget(budget){
    document.getElementById('budget').innerHTML = '$' + budget;
}

function displayExpense(expense){
    document.getElementById('expense').innerHTML = '$' + expense;
}

function displayRemaining(remaining){
    document.getElementById('remaining').innerHTML = '$' + remaining;
}

function displayExpenseList(list){
   document.getElementById('expense-list').innerHTML.value = list;
}