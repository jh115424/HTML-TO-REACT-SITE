function CharacterRatings({ characters }) {
  const topCharacters = (characters) => {
    const votes = [...characters];

    votes.sort((a, b) => {
      if (a.votes > b.votes) {
        return -1;
      } else if (a.votes < b.votes) {
        return 1;
      }

      return b.votes - a.votes;
    });
    return votes.slice(0, 5);
  };
  return (
    <section id="character-ratings" style={{ marginTop: "100px" }}>
      <h4>Top Characters</h4>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>

          {topCharacters(characters).map((character, index) => (
            <tr key={index} className={index % 2 === 0 ? "dark" : "light"}>
              <td>{character.name}</td>
              <td>{character.skillset.join(", ")}</td>
              <td>{character.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default CharacterRatings;
