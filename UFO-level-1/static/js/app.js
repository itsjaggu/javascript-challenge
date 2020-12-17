// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// appending data to html table
tableData.forEach((ufoRow) => {
    var row = tbody.append("tr");
    Object.entries(ufoRow).forEach(([key, value]) => {
        if (key != "durationMinutes") {
            var cell = row.append("td");
            cell.text(value);
        }
    });
  });
  