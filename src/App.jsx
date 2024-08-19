import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

function deriveACtivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = deriveACtivePlayer(gameTurns);
  
  function hadnleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      const currentPlayer = deriveACtivePlayer(prevTurns);

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
