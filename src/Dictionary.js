import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [keywords, setKeywords] = useState("null");
  const [results, setResults] = useState("null");

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keywords}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keywords}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleOnChange(event) {
    console.log(event.target.value);
    setKeywords(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input className="mt-4" type="search" onChange={handleOnChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
