
// Import module redditapi.js
import reddit from './redditapi';

// Select search-form & search-input

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

// Add Event Listener to search-form
searchForm.addEventListener('submit', e => {

    // Get search term
    const searchTerm = searchInput.value
    
    // Get Selected Sort Option
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;

    // Get Selected Limit
    const resultLimit = document.querySelector('#limit').value;
    console.log(resultLimit);

    // Check blank input
    if(searchTerm === ''){

        // Pass message & Bootstrap class
        showMessage('Please add a search term!', 'alert-danger mt-2');

    }


    // prevent default submit
    e.preventDefault();

});

// Define showMessage()
function showMessage(message, className){

    // Create Element
    const div = document.createElement('div');

    // Add Class from className parameter
    div.className = `alert ${className}`;

    // Add Text from message parameter
    div.appendChild(document.createTextNode(message));

    // Get Parent Container div 
    const searchContainer = document.getElementById('search-container');

    // Get Search div
    const searchDiv = document.getElementById('search');

    // Insert created div
    searchContainer.insertBefore(div, searchDiv);

    // Remove error message in 3 sec
    setTimeout(() => document.querySelector('.alert').remove(), 3000);

    // Finally Clear input
    searchInput.value = '';

}