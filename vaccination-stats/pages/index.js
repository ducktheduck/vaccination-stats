import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// Exporting the default function, home page
export default function Home() {

  // Declared variables so they can be used later in code when we return the page
  let date;

  // Fetching the data from an open-source API
  fetch('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json')
    .then(res => res.json())
      .then(data => {
      
        // Declaring the current day
        let day = data[171]["data"].length;
        // Declaring the data we are going to use
        let countryData = data[171]["data"][day-1]
        // Defining the current date
        date = countryData["date"]

        // Debugging
        console.log(countryData)
        console.log (date)

  })
  return (

    <div className = {styles.container}>
      <Head>
        
        <title>Vaccination Stats</title>
        <link rel = "icon" href = "/meta/favicon.ico"/>
        <meta description = "Simple to-use Website for displaying Vaccination Statistics in Romania"/>
        
      </Head>

      <main className = {styles.main}>
        <div>
          <h1 className = {styles.title}> Vaccination Stats </h1>
          {/* <-- <h2 className = {styles.subtitle}>Get the vaccination statistics in Romania in <b>real-time</b>.</h2> */}

        </div>

      </main>



    </div>
  )
}
