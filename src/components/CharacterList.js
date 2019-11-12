import React, { useEffect, useState } from "react";

import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  const [searched, setSearched] = useState([]);

  useEffect(() => {
    const filtered = props.data.filter(cv => {
      return cv.name.includes(props.searchValue.value);
    });
    setSearched(filtered);
  }, [props.isSearching]);

  if (props.data === []) {
    return "";
  } else {
    return (
      <section className="character-list">
        {props.isSearching
          ? searched.length > 0
            ? searched.map(cv => {
                return <CharacterCard datapassed={cv} key={cv.id} />;
              })
            : "No characters found!"
          : props.data.map(cv => {
              return <CharacterCard datapassed={cv} key={cv.id} />;
            })}
      </section>
    );
  }
}

export default CharacterList;
