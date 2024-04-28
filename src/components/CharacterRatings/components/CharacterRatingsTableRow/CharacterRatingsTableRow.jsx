const CharacterRatingsTableRow = ({ character, index }) => {
    const { name, skillset, votes } = character
  return (
    <tr className={index % 2 === 0 ? "dark" : "light"}>
      <td>{character.name}</td>
      <td>{character.skillset.join(", ")}</td>
      <td>{character.votes}</td>
    </tr>
  );
};

export default CharacterRatingsTableRow;