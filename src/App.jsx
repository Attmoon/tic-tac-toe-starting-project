import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const initialGanmeBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveACtivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false);
  // const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = deriveACtivePlayer(gameTurns);

  let gameBoard = initialGanmeBoard;

  for(const turn of gameTurns) {
      const { square, player} = turn;
      const { row, col} = square;

      gameBoard[row][col] = player;
  }

  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol && 
      firstSquareSymbol === thirdSquareSymbol) {
        winner = firstSquareSymbol;
      }
  }

  const hasDraw = gameTurns.length === 9 && !winner;
  
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
      {(winner || hasDraw) && <GameOver winner={winner}/>}
       <GameBoard 
        onSelectSquare={hadnleSelectSquare} 
        board={gameBoard}
        />
      
    </div>

    <Log turns={gameTurns} />
  </main>;
}
export default App;
