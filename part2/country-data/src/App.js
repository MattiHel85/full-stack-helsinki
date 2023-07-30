import {useState, useEffect} from 'react'
import Search from './components/Search';
import countryService from './services/countries';

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    countryService
      .getAll()
      .then(res => {
        setCountries(res.data)
        console.log(res.data)
      })
  }, [])

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );

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
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
          </div>
        ))
        : countries.map((country) => (
          <div key={country.cca3}>
            <h4>{country.name.common}</h4>
            <p>{country.population}</p>
          </div>
        ))
}

    </>
  );
}

export default App;
