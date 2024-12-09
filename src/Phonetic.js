import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a
        href="https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3"
        target="_blank"
      >
        Audio
      </a>
      <div className="text">{props.phonetic.text}</div>
    </div>
  );
}
