let expenses = [];
let totalExpenses = 0;
let remaining = 0;
const budget = parseInt(document.getElementById('budget-value').value);

function updateExpenses(expense){
    expenses.push(expense);
    totalExpenses = expenses.reduce(function (a, b){
        return a + b; 
    });
    displayExpense(totalExpenses);
    total = totalExpenses.toString();
    window.localStorage.setItem(totalExpenses, JSON.stringify(expenses));
    window.localStorage.setItem('totalExpenses', total);
}

function addExpenseItem(list, item, value){
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(item + ' - ' + '$' + value));
    list.appendChild(entry);
    displayExpenseList(list);
    window.localStorage.setItem('expenseList', JSON.stringify(list));
}

function updateRemaining(){
    remaining = budget - expense;
    displayRemaining(remaining);
    remain = remaining.toString();
    window.localStorage.setItem('remaining', remain);
}

window.localStorage.setItem('budget', budget);