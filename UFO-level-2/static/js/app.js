// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

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

// Loading State names for filter
function loadStateOption() {
    var state = d3.select("#state");
    var stateNames = tableData.map(row => row.state).filter((value, index, self) => self.indexOf(value) === index);
    stateNames.forEach((stateName) => {
        var option = state.append("option");
        option.text(stateName);
    });
}

// Loading Country names for filter
function loadCountryOption() {
    var country = d3.select("#country");
    var countryNames = tableData.map(row => row.country).filter((value, index, self) => self.indexOf(value) === index);
    countryNames.forEach((countryName) => {
        var option = country.append("option");
        option.text(countryName);
    });
}

// Loading Shape for filter
function loadShapeOption() {
    var shape = d3.select("#shape");
    var shapeNames = tableData.map(row => row.shape).filter((value, index, self) => self.indexOf(value) === index);
    shapeNames.forEach((shapeName) => {
        var option = shape.append("option");
        option.text(shapeName);
    });
}

// load data
loadTable(tableData);
loadStateOption();
loadCountryOption();
loadShapeOption();

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);
  
// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputDatetimeElement = d3.select("#datetime");
    var inputCityElement = d3.select("#city");
    var inputStateElement = d3.select("#state");
    var inputCountryElement = d3.select("#country");
    var inputShapeElement = d3.select("#shape");


  
    // Get the value property of the input element
    var inputDatetime = inputDatetimeElement.property("value");
    var inputCity = inputCityElement.property("value");
    var inputState = inputStateElement.property("value");
    var inputCountry = inputCountryElement.property("value");
    var inputShape = inputShapeElement.property("value");
  
    // Print the value to the console
    console.log(inputDatetime);
    console.log(inputCity);
    console.log(inputState);
    console.log(inputCountry);
    console.log(inputShape);
  
    //Filtering table data based on user input
    var filteredData = tableData.filter(ufoRow => ((ufoRow.datetime == inputDatetime) && (ufoRow.city == inputCity)
                                                    && (ufoRow.state == inputState) && (ufoRow.country == inputCountry) 
                                                    && (ufoRow.shape == inputShape)));

    //Print the filtered data value
    console.log(filteredData);

    //Loading the filetred data into the html table
    loadTable(filteredData);
}