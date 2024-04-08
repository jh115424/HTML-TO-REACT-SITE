import "./Header.css";
import Header from "./Header.jsx";
import CharacterRatings from "./Character-ratings.jsx";
import "./Character-rating.css";
import { data } from "../public/fma-data.ts";
import CharacterCards from "./Character-cards.jsx";
import "./Character-cards.css";

function App() {
  return (
    <>
      <Header />

      <CharacterRatings characters={data} />

      <CharacterCards cards={data} />
    </>
  );
}

export default App;
