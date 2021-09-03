import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
          <Link to={`/countries/${result.name}`} key={result.id}>
            <div className="search-result" key={result.id}>
              <img src={result.images[0].url} alt={result.name} />
              <div className="overlay">
                <div className="overlay-content">
                  <h2>{result.name}</h2>
                  <h3>{result.capital}</h3>
                </div>
              </div>
            </div>
          </Link>
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
