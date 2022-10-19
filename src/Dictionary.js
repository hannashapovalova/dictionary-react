import React, {useState} from 'react';
import axios from 'axios';
import './Dictionary.css';
import Results from './Results';
import Photos from './Photos';


export default function Dictionary(props) {

  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

    function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

    function search() {
  
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey = "563492ad6f91700001000001acdc135881c14d0aa1d4073fe94797e9";
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

    function handleSubmit(event) {
    event.preventDefault();
    search();
  }

    function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

    function load() {
    setLoaded(true);
    search();
  }

 if (loaded) {
  return (
      <main className="container information-block">
        <div className="search-form-block">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                 type="search" 
                 onChange={handleKeywordChange}
                 className="form-control" 
                 placeholder="Type the word and press Enter..." 
                 aria-label="Search" 
                 aria-describedby="basic-addon2"
                 defaultValue={props.defaultKeyword}>
              </input>
            </div>
          </form>
          <p className="caption">
            <em>for example: island, code, wine, vibe</em>
          </p>
        </div>
        <Results results={results} />
        <Photos photos={photos} />
      </main>
  );
 } else {
  load();
  return "Loading...";
 }
}
