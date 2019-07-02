import React from "react";

const CharacterDetail = props => {
  const { name, aliases, born, titles } = props;
  console.log(props);
  return (
    <div className="detailBar">
      <h3>Name</h3>
      <div>{name}</div>
      <h3>Aliases</h3>
      <div>{aliases}</div>
      <h3>Birth</h3>
      <div>{born}</div>
      <h3>Titles</h3>
      <div>{titles}</div>
    </div>
  );
};

export default CharacterDetail;
