// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// load data
loadTable(tableData);

// appending data to html table
function loadTable(loadData) {
    tbody.html("");
    loadData.forEach((ufoRow) => {
        var row = tbody.append("tr");
        Object.entries(ufoRow).forEach(([key, value]) => {
            if (key != "durationMinutes") {
                var cell = row.append("td");
                cell.text(value);
            }
        });
      });
}

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);
  
// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // Print the value to the console
    console.log(inputValue);
  
    var filteredData = tableData.filter(ufoRow => ufoRow.datetime === inputValue);

    console.log(filteredData);

    loadTable(filteredData);
}
  