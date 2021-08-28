import { useState } from 'react';
import PropTypes from 'prop-types';
import SearchResults from './SearchResults';

const SearchBar = ({ countries }) => {
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setResults(countries.filter((country) => country.name
      .toLowerCase().startsWith(e.target.value)));
  };

  return (
    <>
      <input className="search-bar" type="text" placeholder="Search Country" onChange={(e) => handleChange(e)} />
      <SearchResults results={results} />
    </>
  );
};

SearchBar.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchBar;
