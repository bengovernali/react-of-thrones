import React from "react";

const CharacterList = props => {
  const { characters } = props;
  return (
    <div className="characterList">
      {characters.map((character, index) => (
        <div
          key={`${character.name}-${index}`}
          value={character.name}
          onClick={() => props.handleClick(character)}
        >
          {character.name}
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
