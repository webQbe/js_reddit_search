// Export to index.js
export default {

    // Make a request to Reddit API
    search: function(searchTerm, resultLimit, sortBy){

        // Use Fetch API
        fetch(`http://www.reddit.com/search.json?q=${searchTerm}`)
            .then(res => res.json()) // convert response to json
            .then(data => console.log(data));

            /* Posts are in the children array  */

    }

}