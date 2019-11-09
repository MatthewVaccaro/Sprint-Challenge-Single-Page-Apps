import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";

function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res.data.results[0]);
        setCharacterData(res.data.results);
      })
      .catch(err => {
        console.log("error:", err);
      });
  }, []);

  if (characterData === []) {
    return "";
  } else {
    return (
      <section className="character-list">
        {characterData.map(cv => {
          return <CharacterCard datapassed={cv} key={cv.id} />;
        })}
      </section>
    );
  }
}

export default CharacterList;
