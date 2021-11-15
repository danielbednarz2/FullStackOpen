import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Countries from './components/Countries'
import Country from './components/Country'

const App = () => {
    const [ country, setCountry ] = useState([])
    const [ search, setSearch ] = useState('')

    useEffect(() => {
        axios
        .get('https://restcountries.com/v3.1/all')
        .then(res => setCountry(res.data))
    }, [])

    let filteredCountries = country.filter(place => place.name.common.toLowerCase().includes(search.toLowerCase()))

    const handleSearchValue = (e) => setSearch(e.target.value)
    
    return (
        <div>
            <Search search={search} handleSearchValue={handleSearchValue}/>
            {
            filteredCountries.length > 10 ? 
                <p>Too many matches, specify country</p> : 
            filteredCountries.length === 1 ?
                <Country filteredCountries={filteredCountries} /> :
                <Countries filteredCountries={filteredCountries} setSearch={setSearch} />
            }
        </div>
    )
}

export default App
