import React from "react";
import "./CharacterCards.css";
import CharacterCard from "./components/CharacterCard/CharacterCard";


class CharacterCards extends React.Component {
  render() {
    return (
      <section id="characterCards">
        {this.props.cards.map((card) => (
         <CharacterCard key= {card.name} card= { card }/>
        ))}
      </section>
    );
  }
}

export default CharacterCards;
