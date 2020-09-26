// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select table within html
var table = d3.select("#ufo-table")

// Select the form
var form = d3.select("#form");

// Create rows in table and print values
data.forEach((tableData) => {
    var row = table.append("tr");
    Object.entries(tableData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // Create event handlers
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  //console.log(tableData);

  var filteredData = tableData.filter(data => data.datetime === inputValue);

  console.log(filteredData);

//Created section to show filtered results in html
var list = d3.select(".summary");
// remove any children from the list to
list.html("");
//Map result arrays to convert to lists
var sDate = filteredData.map(function(result) {
  return result.datetime
  });
console.log(sDate);

var sCity = filteredData.map(function(result) {
  return result.city
    });
console.log(sCity);

var sState = filteredData.map(function(result) {
  return result.state
    });
console.log(sState);

var sCountry = filteredData.map(function(result) {
  return result.country
    });
console.log(sCountry);

var sShape = filteredData.map(function(result) {
  return result.shape
    });
console.log(sShape);

var sDuration = filteredData.map(function(result) {
  return result.durationMinutes
    });
console.log(sDuration);

var sComments = filteredData.map(function(result) {
  return result.comments
    });
console.log(sComments);

//Loop to create lists in summary section and add results in text
  for (var i = 0; i < filteredData.length; i++) {

    console.log(sDate[i],sCity[i],sState[i],sCountry[i],sShape[i],sDuration[i],sComments[i]);
    list.append("li").text(`Date: ${sDate[i]}, City: ${sCity[i]}, Country: ${sCountry[i]}, Shape: ${sShape[i]}, Duration: ${sDuration[i]}, Comments: Shape: ${sComments[i]}`);
  }
};
