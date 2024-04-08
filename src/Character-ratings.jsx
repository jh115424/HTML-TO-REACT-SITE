




function CharacterRatings ({ characters })  {
  return (
    <div>
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Skillset</th>
              <th>Votes</th>


            </tr>
             
            {characters.map((character, index) => (
              <tr key = {index} className= {index % 2 === 0? "dark" : "light"}>
                <td>{character.name}</td>
                <td>{character.skillset}</td>
                <td>{character.votes}</td>
              </tr>
            ))}
          </tbody>
             
        </table>
             
      </section>
    </div>
  );
}


export default CharacterRatings;



