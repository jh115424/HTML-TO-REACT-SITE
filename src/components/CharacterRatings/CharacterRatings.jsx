import "./CharacterRating.css";
import CharacterRatingsTableRow from "./components/CharacterRatingsTableRow/CharacterRatingsTableRow";

function CharacterRatings({ characters }) {
  const topCharacters = [...characters]
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 5);

  const characterTitles = ["name", "skillset", "votes"];

  return (
    <section id="characterRatings" style={{ marginTop: "100px" }}>
      <h4>Top Characters</h4>
      <table>
        {characterTitles.map((title, index) => (
          <th key={index}> {title}</th>
        ))}

        <tbody>
          {topCharacters.map((character, index) => (
            <CharacterRatingsTableRow
              key={character.name}
              character={character}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}
export default CharacterRatings;
