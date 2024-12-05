import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <div className="partOfSpeech">{props.meaning.partOfSpeech}</div>
      <div className="definitions">
        {props.meaning.definitions.map(function (definition, index) {
          if (index === 0) {
            return (
              <div key={index}>
                {" "}
                {definition.definition}
                {definition.synonyms}
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
