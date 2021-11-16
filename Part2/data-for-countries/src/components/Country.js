import axios from "axios"
import { useEffect, useState } from "react"

const Country = ({ filteredCountries, weatherAPI }) => {
    const [ temp, setTemp ] = useState('')
    const [ wind, setWind ] = useState('')
    let languageArray = []
    let id = 0

    useEffect(() => {
        axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${filteredCountries[0].capital}&appid=${weatherAPI}
        `)
        .then(res => {
            setTemp(res.data.main.temp)
            setWind(res.data.wind.speed)
        })
    }, [filteredCountries, weatherAPI])

    for (let key in filteredCountries[0].languages) {
        languageArray.push(filteredCountries[0].languages[key])
    }

    return (
        <>
        <h2>{filteredCountries[0].name.common}</h2>
        <p>{filteredCountries[0].capital}</p>
        <p>{String(filteredCountries[0].population).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</p>
        <h3>languages</h3>
        <ul>
            {languageArray.map(lang => <li key={id++}>{lang}</li>)}
        </ul>
        <img src={`${filteredCountries[0].flags.svg}`} alt={`${filteredCountries[0].name.common} flag`} height={100} width={"auto"} />
        <h2>weather</h2>
        <p>temparture: {Math.round((temp - 273.15) * (9/5) + 32)} degrees Farenheit</p>
        <p>wind: {Math.round(wind * 1.609)} mph</p>
        </>
    )
}

export default Country;