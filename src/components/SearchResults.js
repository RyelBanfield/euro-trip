import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const SearchResults = ({ results }) => {
  const [foundResults, setFoundResults] = useState(null);

  useEffect(() => {
    if (results.length === 0 || results.length === 45) {
      setFoundResults(false);
    } else {
      setFoundResults(true);
    }
  }, [results]);

  return (
    <>
      {foundResults && (
      <div className="search-results">
        {results.map((result) => (
          <div className="search-result" key={result.id}>
            <h1>{result.name}</h1>
            <img src={result.images[0].url} alt="" />
          </div>
        ))}
      </div>
      )}
    </>
  );
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchResults;
