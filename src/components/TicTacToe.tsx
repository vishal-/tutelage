import { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next: ${isX ? 'X' : 'O'}`;

  const handleClick = (i: number) => {
    if (board[i] || winner) return;
    const newBoard = [...board];
    newBoard[i] = isX ? 'X' : 'O';
    setBoard(newBoard);
    setIsX(!isX);
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setIsX(true);
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <h2>Tic Tac Toe</h2>
      <div style={{ marginBottom: '10px' }}>{status}</div>
      <div style={{ display: 'inline-grid', gridTemplate: 'repeat(3, 60px) / repeat(3, 60px)', gap: '2px' }}>
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              border: '1px solid #999',
              background: '#fff',
              cursor: 'pointer'
            }}
          >
            {cell}
          </button>
        ))}
      </div>
      <br />
      <button onClick={reset} style={{ marginTop: '10px', padding: '5px 10px' }}>
        Reset
      </button>
    </div>
  );
};

function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;