import React, {useState} from 'react';
import axios from 'axios';
import './Dictionary.css';
import Results from './Resulrs';


export default function Dictionary() {

  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

return (
      <main className="container information-block">
        <div className="search-form-block">
          <form onSubmit={search}>
            <div className="input-group mb-3">
              <input
                 type="search" 
                 onChange={handleKeywordChange}
                 className="form-control" 
                 placeholder="Search..." 
                 aria-label="Search" 
                 aria-describedby="basic-addon2">
              </input>
              <div className="input-group-append">
                <button
                 className="btn btn-outline-secondary" 
                 type="button">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
        <Results results={results} />
      </main>

  );
}
