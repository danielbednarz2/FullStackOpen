
const Countries = ({ filteredCountries }) => {
    return (
        <>
        {filteredCountries.map(res => 
            <p key={res.name.common}>
            {res.name.common}
            </p>
            )
        } 
        </>
    )
}

export default Countries;