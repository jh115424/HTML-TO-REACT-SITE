import './reset.css'
import './styles.css';
import Header from "./Header/Header.jsx";
import CharacterRatings from "./components/CharacterRatings/CharacterRatings.jsx";
import CharacterCards from "./components/CharacterCards/CharacterCards.jsx";





import { data } from "./constants/fma-data.ts";




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
