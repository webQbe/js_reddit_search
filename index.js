// Select search-form & search-input

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

// Add Event Listener to search-form
searchForm.addEventListener('submit', e => {

    // Get search term
    const searchTerm = searchInput.value
    
    // Get Selected Sort Option
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;
    console.log(sortBy);


    // prevent default submit
    e.preventDefault();

});