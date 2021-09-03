import { useState } from 'react';
import PropTypes from 'prop-types';
import SearchResults from './SearchResults';

const SearchBar = ({ countries }) => {
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setResults(countries.filter((country) => country.name.toLowerCase()
      .startsWith(e.target.value.toLowerCase())
    || country.capital.toLowerCase()
      .startsWith(e.target.value.toLowerCase())));
  };

  return (
    <div className="search-container">
      <input className="search-bar" type="text" placeholder="Search European Countries" onChange={(e) => handleChange(e)} />
      <SearchResults results={results} />
    </div>
  );
};

SearchBar.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchBar;
