
const Search = ({ search, handleSearchValue }) => {
    return (
        <div>
             <p>find countries</p>
            <input value={search} onChange={handleSearchValue}/>
        </div>
    )
}

export default Search