/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    const req = axios.get(baseURL)
    return req.then(res => res.data)
}

const create = createObject => {
    const req = axios.post(baseURL, createObject)
    return req.then(res => res.data)
}

const deletePerson = (id) => {
    const req = axios.delete(`${baseURL}/${id}`)
    return req.then(res => res.data)
}

export default { getAll, create, deletePerson}