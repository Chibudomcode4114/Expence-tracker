let expenses = [];
let totalAmmount = 0;

const categorySelect = document.getElementById("category-select");
const amountInput = document.getElementById("ammount-type");
const dateInput = document.getElementById("date-input");
const addBtn = document.getElementById("add-btn");
const expensesTableBody = document.getElementById("expense-table-body")
const totalAmmountCell = document.getElementById("total-ammount")

addBtn.addEventListener("click", function () {
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category === "") {
        alert('Please select a category');
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid ammount');
        return
    }
    if (date === "") {
        alert('Please select a date');
        return;
    }
    expenses.push({
        category,
        amount,
        date
    })

    totalAmmount += amount;
    totalAmmountCell.textContent = totalAmmount;

    const newRow = expensesTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell()
    const dateCell = newRow.insertCell()
    const deleteCell = newRow.insertCell()
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function () {
        const row = deleteBtn.parentNode.parentNode;
        const rowIndex = row.rowIndex - 1;
        const expense = expenses[rowIndex];
        expenses.splice(rowIndex, 1);
        totalAmmount -= expense.amount;
        totalAmmountCell.textContent = totalAmmount;

        expensesTableBody.removeChild(row);
    });

    const expense = expenses[expenses.length - 1];
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);
})