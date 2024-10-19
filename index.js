
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

    // Check blank input
    if(searchTerm === ''){

        // Pass message & Bootstrap class
        showMessage('Please add a search term!', 'alert-danger mt-2');

    }

    // Finally Clear input
    searchInput.value = '';

    // Search Reddit 
    // reditapi.search() returns a promise
    reddit.search(searchTerm, resultLimit, sortBy)
        .then(results => {
            
            // Output results to UI
            let output = '<div class="card-columns">';

            // Loop through results array
            results.forEach(post => {

                // Append Bootstrap Card template
                output += `
                <div class="card">
                    <img class="card-img-top" src="..." alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>`;

            });

             // Append closing tag
            output += '</div>';

            // Output to results div 
            document.getElementById('results').innerHTML = output;

        });

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


}