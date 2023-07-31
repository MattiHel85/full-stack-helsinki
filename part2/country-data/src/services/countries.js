import axios from "axios";
const apiUrlAll = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const apiUrlIndividual = 'https://studies.cs.helsinki.fi/restcountries/api/name/'

const getAll = () => {
    return axios.get(apiUrlAll)
}

const getCountry = (name) => {
    return axios.get(`${apiUrlIndividual}/${name}`)
}

const countryService = {
    getAll: getAll,
    getCountry: getCountry
}

export default countryService