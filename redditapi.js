// Export to index.js
export default {

    // Make a request to Reddit API
    search: function(searchTerm, resultLimit, sortBy){

        // Use Fetch API
        fetch(`http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${resultLimit}`)
            .then(res => res.json()) // convert response to json
            .then(data => console.log(data.data.children));

    }

}


/* Reddit API search endpoint parameters

after	        :   fullname of a thing
before	        :   fullname of a thing
category	    :   a string no longer than 5 characters
count	        :   a positive integer (default: 0)
include_facets	:   boolean value
limit	        :   the maximum number of items desired (default: 25, maximum: 100)
q	            :   a string no longer than 512 characters
restrict_sr	    :   boolean value
show	        :   (optional) the string all
sort	        :   one of (relevance, hot, top, new, comments)
sr_detail	    :   (optional) expand subreddits
t	            :   one of (hour, day, week, month, year, all)
type	        :   (optional) comma-delimited list of result types (sr, link, user)

*/