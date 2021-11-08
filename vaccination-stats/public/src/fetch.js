// Main class witch contains functions that return specific data
module.exports = class Fetch {
    /** ## Class with functions for fetching data from given URLs
     * @param {none} None
     * ### How to use
     * ```js
     * let FetchClass = new Fetch();
     * let VaccineStatsData = FetchClass.fetchVaccineData(URL)
     * 
     * 
     * 
     * ```
     */
    // Class constructor
    constructor () {
        this.cefama = "buenos dias"

    }


    // Function that fetches vaccine data from a given json API
    // Returns raw data
    fetchData (url) {

        

        // Fetching the data from <this.url>
        fetch(url)
            .then(res => res.json())
            .then(data => {
            
                // Declaring the current day
                let day = data[171]["data"].length;
                // Declaring the data we are going to use
                let countryData = data[171]["data"][day-2]

                // Defining the current date
                //date = countryData["date"]
                
                // Returning the raw data
                return countryData;
            })
    }



}
