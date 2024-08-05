import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');
  
  function hadnleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';

      if(prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTruns = [
        { square: { row: rowIndex, col: colIndex}, player: activePlayer },
        ...prevTurns
      ];

      return updatedTruns;
    });
  }

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player1" symbol="X" isActive={activePlayer === 'X'}/>
        <Player initialName="Player2" symbol="O" isActive={activePlayer === 'O'}/>
      </ol>
       <GameBoard 
        onSelectSquare={hadnleSelectSquare} 
        turns={gameTurns}
        />
      
    </div>

    <Log turns={gameTurns} />
  </main>;
}

export default App;
