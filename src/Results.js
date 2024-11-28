import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  return (
    <div className="Results">
      <h1>{props.results.word}</h1>
      <h2>{props.results.phonetic}</h2>
      {props.results.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
        );
      })}
    </div>
  );
}
