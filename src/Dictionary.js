import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  const [keywords, setKeywords] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handlePhotosResponse(response) {
    console.log(response);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keywords}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let photosApiKey =
      "2pASalYqjcC6jJqoHIyiTA9uaC5ktGSzEPsSQiEUFYNGOiabSFCcCiY4";
    let photosApiUrl = `https://api.pexels.com/v1/search?query=${keywords}&per_page=1`;

    let headers = { Authorization: `Bearer ${photosApiKey}` };
    axios
      .get(photosApiUrl, {
        headers: headers,
      })
      .then(handlePhotosResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keywords}`);
    search();
  }
  function handleOnChange(event) {
    console.log(event.target.value);
    setKeywords(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="form">
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleOnChange}
              defaultValue="Search for a word"
            />
          </form>
          <div className="hint">i.e. paris, wine, yoga, coding</div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
