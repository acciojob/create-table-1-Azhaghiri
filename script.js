function insert_Row() {
    //Write your code here
    const table = document.getElementById("sampleTable");
 
            // Create a new row at the top (index 1 to insert below any headers)
            const newRow = table.insertRow(0); // Insert at index 1 to add at the top of the table

            // Create new cells
            const cell1 = newRow.insertCell(0); // Left cell
            const cell2 = newRow.insertCell(1); // Right cell

            // Set the values for the new cells
            cell1.textContent = "New Cell1"; // Set value for the left cell
            cell2.textContent = "New Cell2"; // Set value for the right cell
  
}
