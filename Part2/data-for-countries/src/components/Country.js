
const Country = ({ filteredCountries }) => {
    let languageArray = []
    let id = 0

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
        </>
    )
}

export default Country;