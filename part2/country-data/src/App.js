import {useState, useEffect} from 'react'
import Search from './components/Search';
import countryService from './services/countries';

const App = () => {
  const [countries, setCountries] = useState([])
  const [countryInfo, setCountryInfo] = useState({})
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    countryService
      .getAll()
      .then(res => {
        setCountries(res.data)
      })
  }, [])

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  const getCountry = (commonName) => {
    // console.log(`This is ${commonName}`)
    countryService
      .getCountry(commonName)
      .then(res => {
        setCountryInfo(res.data)
        // console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <h1>COUNTRIES!</h1>
      <Search filter={filter} onFilterChange={handleFilterChange}/>
      {
      filter
        ? 
        filteredCountries.length > 10
        ? 
        <p>Too many matches, please be more specific</p> 
        :
        filteredCountries.length === 1 
        ?
        filteredCountries.map((country) => (
          <div key={country.cca3}>
            <h4>{country.name.common}</h4>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <p>Languages: </p>
            <ul>
              {Array.isArray(country.languages)
                ? country.languages.map((language) => <li key={language}>{language}</li>)
                : Object.values(country.languages).map((language) => <li key={language}>{language}</li>)
              }
            </ul>
            <img src={country.flags.png} alt={`flag of ${country.name.common}`}/>
          </div>
        ))
        :
        filteredCountries.map((country) => (
          <div key={country.cca3}>
            <h4>{country.name.common}</h4>
            <button onClick={() => getCountry(country.name.common)}>show</button>

            { Object.keys(countryInfo).length > 0 && countryInfo.name.common === country.name.common ? (
                <>
                  <p>Capital: {countryInfo.capital}</p>
                  <p>Area: {countryInfo.area}</p>
                  <p>Languages: </p>
                  <ul>
                    {Array.isArray(countryInfo.languages)
                      ? countryInfo.languages.map((language) => <li key={language}>{language}</li>)
                      : Object.values(countryInfo.languages).map((language) => <li key={language}>{language}</li>)
                    }
                  </ul>
                  <img src={countryInfo.flags.png} alt={`flag of ${countryInfo.name.common}`}/>
                </> ) : null
            }

          </div>
        ))
        : countries.map((country) => (
          <div key={country.cca3}>
            <h4>{country.name.common}</h4>
            <button onClick={() => getCountry(country.name.common)}>show</button>
            { Object.keys(countryInfo).length > 0 && countryInfo.name.common === country.name.common ? (
                <>
                  <p>Capital: {countryInfo.capital}</p>
                  <p>Area: {countryInfo.area}</p>
                  <p>Languages: </p>
                  <ul>
                    {Array.isArray(countryInfo.languages)
                      ? countryInfo.languages.map((language) => <li key={language}>{language}</li>)
                      : Object.values(countryInfo.languages).map((language) => <li key={language}>{language}</li>)
                    }
                  </ul>
                  <img src={countryInfo.flags.png} alt={`flag of ${countryInfo.name.common}`}/>
                </> ) : null
            }
          </div>
        ))
}

    </>
  );
}

export default App;
