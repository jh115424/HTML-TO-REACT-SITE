import React from "react";

class CharacterCards extends React.Component {
  render(cards) {
    return (
      <div>
        <section id="character-cards">
          <div className="card">
            <div className="card-titles">
              {this.props.cards.map((cards, index) => (
                <div key={index}>
                  <div className="card-title">
                    <h3>{cards.name}</h3>
                    <h4>{cards.nickName}</h4>
                    <img
                      src={`${"https://www.giantbomb.com/a/uploads/original/1/19821/694167-armstrong.jpg"}`}
                      alt="armstrong"
                    />
                    <p>{cards.background}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CharacterCards;
