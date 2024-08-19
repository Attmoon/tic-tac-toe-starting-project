

export default function GameBoard( {onSelectSquare, turns} ) {
    

    // const [gameBoard, setGameBoard] =  useState(initialGanmeBoard);

    // function hadnleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }

    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                    <button onClick={() => onSelectSquare(rowIndex, colIndex)} 
                    disabled={playerSymbol !== null}
                >
                        {playerSymbol}
                    </button>
                </li>
            ))}
            </ol>
        </li>)}
    </ol>
}