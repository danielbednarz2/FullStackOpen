/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    const req = axios.get(baseURL)
    return req.then(res => res.data)
}

const create = createObject => {
    const req = axios.post(baseURL, createObject)
    return req.then(person => person.data)
}

export default { getAll, create }