import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a
        href="https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3"
        target="_blank"
      >
        Audio
      </a>
      <br />
      <div>{props.phonetic.text}</div>
    </div>
  );
}
