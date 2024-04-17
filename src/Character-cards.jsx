import React from "react";

class CharacterCards extends React.Component {
  render() {
    return (
      <section id="character-cards">
        {this.props.cards.map((cards, index) => (
          <div key={index} className="card">
            <div className="card-titles">
              <h3>{cards.name}</h3>
              <h4>{cards.nickName}</h4>
            </div>

            <img src={cards.imageUrl} alt={cards.name} />

            <p>{cards.background}</p>
          </div>
        ))}
      </section>
    );
  }
}

export default CharacterCards;
