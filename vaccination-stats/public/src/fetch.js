
module.exports = class Fetch {
    /** ## Class with functions for fetching data from given URLs
     * 
     * @param {none} None
     * ### Usage
     * ```js
     * let FetchClass = new Fetch();
     * let VaccineStatsData = FetchClass.fetchVaccineData(URL)
     * ```
     */

    /**
     * Class Constructor
     */
    constructor () {

        this.cefama = this.fetchData('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json')

    }

    /**
     * ### Return Data
     * * Function that returns specified data from a given object
     * 
     * @param {object} data Data from where
     * 
     * @returns {} Returns string/integer/another type of information
     */
    returnData (data) {

    }


    /**
     * ### Fetch Data
     * * Function that fetches vaccine/covid data from a given json API
     * 
     * @param {string} url Link from where the data should be fetched
     * 
     * @returns {object} Raw data
     */
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

                //console.log(countryData)

                // Returning the raw data
                return countryData;
            })

    }


}
