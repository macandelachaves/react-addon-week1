import React from "react";

import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h1 className="mt-3">{props.results.word}</h1>
        <div>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                {" "}
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
