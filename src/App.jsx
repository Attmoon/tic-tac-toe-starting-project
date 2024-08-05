import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function hadnleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player1" symbol="X" isActive={activePlayer === 'X'}/>
        <Player initialName="Player2" symbol="O" isActive={activePlayer === 'O'}/>
      </ol>
       <GameBoard onSelectSquare={hadnleSelectSquare} activePlayerSymbol={activePlayer}/>
      
    </div>

    LOG
  </main>;
}

export default App;
