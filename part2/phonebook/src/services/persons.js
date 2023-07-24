import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const update = (id, updatedObject) => {
    return axios.put(`${baseUrl}/${id}`, updatedObject);
  };

const remove = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

const personService = {
    getAll: getAll,
    create: create,
    update: update,
    remove: remove
  };
  
  export default personService;