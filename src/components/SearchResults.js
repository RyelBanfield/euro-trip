/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

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
    <div className="search-results">
      {foundResults && (
      <div className="search-results-container">
        {results.map((result) => (
          <div className="search-result" key={result.id}>
            <h1>{result.name}</h1>
            <img src={result.images[0].url} alt="" />
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default SearchResults;
