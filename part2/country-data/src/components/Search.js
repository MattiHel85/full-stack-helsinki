const Search = ({ filter, onFilterChange }) => {

    return (
        <>
            Search countries: <input type="text" value={filter} onChange={onFilterChange} />
        </>
    );
}

export default Search;