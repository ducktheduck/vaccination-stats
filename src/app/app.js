
// Declarated a div as an element
let statsDiv = document.getElementById("stats")


// Fetching data from an API
fetch ("https://covid.ourworldindata.org/data/owid-covid-data.json").then(res => res.json()).then(data => {
    console.log(data)
})

// Saracie