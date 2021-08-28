/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import SearchResults from './SearchResults';

const SearchBar = () => {
  const countries = useSelector((state) => state.countries);
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchResults(countries.filter((country) => country.name
      .toLowerCase().startsWith(e.target.value)));
  };

  return (
    <>
      <input type="text" placeholder="Search Country" onChange={(e) => handleChange(e)} />
      <SearchResults results={searchResults} />
    </>
  );
};

export default SearchBar;
