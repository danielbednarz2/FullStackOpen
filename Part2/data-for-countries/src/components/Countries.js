
const Countries = ({ filteredCountries, setSearch }) => {

    return (
        <>
        {filteredCountries.map(res => 
            <div key={res.name.common} >
                <p>
                {res.name.common}
                </p>
                <button onClick={() => setSearch(res.name.common)}>show</button>
            </div>
            )
        } 
        </>
    )
}

export default Countries;