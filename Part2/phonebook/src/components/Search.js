

const Search = ({ searchValue, handleSearchValue }) => {
    return (
        <input value={searchValue} onChange={handleSearchValue} />
    )
}

export default Search;