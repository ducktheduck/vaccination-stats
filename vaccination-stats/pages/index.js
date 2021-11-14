import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import fetch from '../public/src/fetch'

let Fetch = require('../public/src/fetch')

// Exporting the default function, home page
export default function Home() {

  // Declared URLs and the main class for fetching data
  let URLVaccination = 'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json';
  let URLCovid = 'https://covid.ourworldindata.org/data/owid-covid-data.json';

  let FetchingClass = new Fetch()

  // Declared variables that contains raw data
  let VacData = FetchingClass.fetchData(URLVaccination)
  //let CovData = FetchingClass.fetchData(URLCovid)

  // Debugging
  console.log('ce fa maaa')
  console.log(FetchingClass.cefama)
  //console.log(CovData)

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
