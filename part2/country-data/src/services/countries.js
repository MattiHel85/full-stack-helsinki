import axios from "axios";
const apiUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAll = () => {
    return axios.get(apiUrl)
}

const countryService = {
    getAll: getAll
}

export default countryService