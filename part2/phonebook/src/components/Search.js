const Search = ({ filter, onFilterChange }) => {

    return (
        <>
            Search phonebook: <input type="text" value={filter} onChange={onFilterChange} />
        </>
    );
}

export default Search;