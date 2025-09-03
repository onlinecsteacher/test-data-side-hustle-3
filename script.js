// KEYWORD FILTERING PLAN FOR TECHNICAL AND SKILLS REQUIRED CATEGORY
// Follow these steps to create a filter that searches for user-inputted keywords using Array.filter()

//1) Create a variable called "searchInput" and get the HTML input element where users will type their keyword
const searchInput = document.getElementById("search-input");

//2) Create a variable called "filterButton" and get the HTML button element that will trigger the search
const filterButton = document.getElementById("filter-button");

//3) Create a variable called "allRows" and convert the table rows to an array using Array.from() method
const allRows = Array.from(document.querySelectorAll("#opportunities-table tbody tr")); 

//4) Create a variable called "resultsCounter" and get the HTML element that will display the number of filtered results
const resultsCounter = document.getElementById("results-counter");

//5) Add an event listener to the filter button that listens for "click" events
filterButton.addEventListener("click", () => {
    //6) Inside the event listener, create a variable called "keyword" and get the value from the search input (convert to lowercase)
    const keyword = searchInput.value.toLowerCase();

    //7) Create a variable called "technicalSkillsColumnIndex" and set it to the column number where Technical and Skills Required data is stored
    const technicalSkillsColumnIndex = 8;

    //8) Create a variable called "filteredRows" using allRows.filter() method to find rows where the technical skills cell includes the keyword
    const filteredRows = allRows.filter(row => {
        //9) Inside the filter function, get the technical skills cell from each row using the column index
        const technicalSkillsCell = row.cells[technicalSkillsColumnIndex];
        //10) Get the cell text content, convert to lowercase, and use includes() method to check if it contains the keyword
        const cellText = technicalSkillsCell.textContent.toLowerCase();
        //11) Return true if the cell text includes the keyword, false otherwise
        return cellText.includes(keyword);
    });
    
    //12) Hide all rows first by setting each row's display style to "none"
    allRows.forEach(row => {
        row.style.display = "none";
    });
    
    //13) Show only the filtered rows by setting each filtered row's display style to "table-row"
    filteredRows.forEach(row => {
        row.style.display = "table-row";
    });
    
    //14) Create a variable called "visibleRowsCount" and set it to the length of the filteredRows array
    const visibleRowsCount = filteredRows.length;
    
    //15) Update the resultsCounter element to display the number of matching results
    resultsCounter.textContent = `${visibleRowsCount} results found`;
    
    //16) Create a variable called "noResultsMessage" and get the HTML element that shows when no matches are found
    const noResultsMessage = document.getElementById("no-results-message");
    
    //17) Use an if statement to check if visibleRowsCount is 0, then show the no results message, otherwise hide it
    if (visibleRowsCount === 0) {
        noResultsMessage.style.display = "block";
    } else {
        noResultsMessage.style.display = "none";
    }
});

//18) Add a "Clear Filter" button functionality that shows all rows again by setting their display to "table-row"
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", () => {
    allRows.forEach(row => {
        row.style.display = "table-row";
    });
        //19) When clearing filters, update the results counter to show the total number of opportunities and hide the no results message
    resultsCounter.textContent = "All opportunities";
    noResultsMessage.style.display = "none";
});

