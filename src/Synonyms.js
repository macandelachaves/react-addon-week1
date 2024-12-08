import React from "react";

export default function Synonyms(props) {
  return (
    <div className="Synonyms">
      <p className="mt-3">
        <strong>Synonyms:</strong>
      </p>
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
