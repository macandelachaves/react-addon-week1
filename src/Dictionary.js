import React, { useState } from "react";

export default function Dictionary() {
  const [keywords, setKeywords] = useState("null");

  function search(event) {
    event.preventDefault();
    alert(keywords);
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
    </div>
  );
}
