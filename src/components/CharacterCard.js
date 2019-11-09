import React from "react";

export default function CharacterCard(props) {
  console.log(props);
  return (
    <div>
      <img src={props.datapassed.image} />
      <h1>{props.datapassed.name}</h1>
      <h3>{props.datapassed.species}</h3>
      <p>{props.datapassed.status}</p>
    </div>
  );
}
