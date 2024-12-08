import React from "react";
import "./synonyms.css";

export default function Synonyms(props) {
  return (
    <div className="Synonyms">
      <p className="mt-3">Synonyms:</p>
      {props.synonyms.synonyms.map(function (synonym, index) {
        return (
          <div key={index}>
            <li className="list-unstyled">{synonym}</li>
          </div>
        );
      })}
    </div>
  );
}
