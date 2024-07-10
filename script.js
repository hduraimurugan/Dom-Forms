function saveStudent() {
    // Get form values
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    let food = document.querySelectorAll('input[name="food"]:checked');
    
    let foodOpt = Array.from(food).map(node => (
        node.value
      ));
      console.log(foodOpt.join(","))

    const email = document.getElementById('email').value;
    const address1=document.getElementById('address1').value;
    const address2=document.getElementById('address2').value;
    const pincode=document.getElementById('pincode').value;

    // Create a new row and cells
    const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
   
    // Append values to the cells
    cell1.textContent = firstname;
    cell2.textContent = lastname;
    cell3.textContent = address1;
    cell4.textContent = address2;
    cell5.textContent = pincode;
    cell6.textContent = gender;
    cell7.textContent = foodOpt;
    cell8.textContent = email;
    cell9.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
    
    // Clear the form
    document.getElementById('studentForm').reset();
    document.getElementById('male').checked = true;
}

function deleteRow(button) {
    // Delete the row containing the button
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
function selection(checkbox) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var checkedCount = 0;

    checkboxes.forEach(function(cb) {
        if (cb.checked) {
            checkedCount++;
        }
    });

    if (checkedCount > 2) {
        return window.alert("You can select up to 2 options only.");
        checkbox.checked = false;
    }
}