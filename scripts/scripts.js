function calculateTotal() {
    var table = document.getElementById('tasksTable');
    var totalHours = 0;
    var totalMinutes = 0;

    for (var i = 1; i < table.rows.length - 1; i++) {
        var durationCell = table.rows[i].cells[2];
        totalHours += parseInt(durationCell.children[0].value || 0);
        totalMinutes += parseInt(durationCell.children[2].value || 0);
    }

    // Convert total minutes into hours and minutes
    totalHours += Math.floor(totalMinutes / 60);
    totalMinutes %= 60;

    document.getElementById('totalDuration').innerText = totalHours + 'h ' + totalMinutes + 'm';
}


function deleteRow(rowIndex) {
    var table = document.getElementById('tasksTable');
    table.deleteRow(rowIndex);
    calculateTotal();
}

function createNewRow() {
    var table = document.getElementById('tasksTable');
    var newRow = table.insertRow(table.rows.length - 1); // Insert above the Total Duration row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    var input1 = document.createElement('input');
    input1.type = 'text';
    input1.placeholder = 'Task';
    cell1.appendChild(input1);

    var input2 = document.createElement('input');
    input2.type = 'text';
    input2.placeholder = 'Description';
    cell2.appendChild(input2);

    var input3 = document.createElement('input');
    input3.type = 'number';
    input3.placeholder = 'Hours';
    input3.style.width = '45%';
    cell3.appendChild(input3);

    var input4 = document.createElement('input');
    input4.type = 'number';
    input4.placeholder = 'Minutes';
    input4.style.width = '45%';
    cell3.appendChild(input4);

    var addButton = document.createElement('button');
    addButton.textContent = 'Add';
    addButton.onclick = function () {
        createNewRow();
        calculateTotal(); // Call calculateTotal when Add button is clicked
    };
    cell4.appendChild(addButton);

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        deleteRow(newRow.rowIndex);
    };
    cell5.appendChild(deleteButton);

    // Separator
    cell3.appendChild(document.createTextNode(' : '));
}

function confirmAction() {
    // Customize this function as needed
    alert("Confirmed!");
}

function cancelAction() {
    // Customize this function as needed
    alert("Cancelled!");
}

window.onload = function () {
    createNewRow(); // Call this to create the initial blank row
};

function navigate(url) {
    window.location.href = url;
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const openArrow = document.querySelector('.open-arrow');
    const closeArrow = document.querySelector('.close-arrow');

    openArrow.addEventListener('click', function() {
        sidebar.classList.add('expanded');
    });

    closeArrow.addEventListener('click', function() {
        sidebar.classList.remove('expanded');
    });
}

document.addEventListener("DOMContentLoaded", toggleSidebar); // Call the function once the DOM is fully loaded

