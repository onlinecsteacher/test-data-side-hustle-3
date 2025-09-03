// KEYWORD FILTERING PLAN FOR TECHNICAL AND SKILLS REQUIRED CATEGORY
// Follow these steps to create a filter that searches for user-inputted keywords

//1) Create a variable called "searchInput" and get the HTML input element where 
// users will type their keyword
const searchInput = document.getElementById("search-input");

//2) Create a variable called "filterButton" and get the HTML button element 
// that will trigger the search
const filterButton = document.getElementById("filter-button");

//3) Create a variable called "allRows" and get all the table rows 
// that contain opportunity data
const allRows = document.querySelectorAll("#opportunities-table tbody tr");

//4) Add an event listener to the filter button that listens for "click" events
filterButton.addEventListener("click", () => {
    //5) Inside the event listener, create a variable called "keyword" 
    // and get the value from the search input (convert to lowercase)
    const keyword = searchInput.value.toLowerCase();
    
    //6) Create a variable called "technicalSkillsColumnIndex" 
    // and set it to the column number where Technical and Skills Required data is stored
    const technicalSkillsColumnIndex = 8;

    //7) Loop through each row in "allRows" 
    // and create a variable called "technicalSkillsCell" to get the specific cell content
    allRows.forEach(row => {
        const technicalSkillsCell = row.cells[technicalSkillsColumnIndex];
   
        //8) Create a variable called "cellText" 
        // and get the text content from the technical skills cell (convert to lowercase)
        const cellText = technicalSkillsCell.textContent.toLowerCase();

        //9) Use an if statement to check if the cell text includes the keyword using the includes() method
        if (cellText.includes(keyword)) {
            //10) If the keyword is found, set the row's display style to "table-row" to show it
            row.style.display = "table-row";
        } else {
            //11) If the keyword is not found, set the row's display style to "none" to hide it
            row.style.display = "none";
        }
    });
});
        //12) Add a "Clear Filter" button functionality that shows all rows again 
// by setting their display to "table-row"
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", () => {
    allRows.forEach(row => {
        row.style.display = "table-row";
    });
});

