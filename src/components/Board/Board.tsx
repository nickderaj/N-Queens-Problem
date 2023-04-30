import Image from 'next/image';

type Props = {
  n: number;
  queens: string[];
};

const Board: React.FC<Props> = ({ n, queens }) => {
  const evenCellColor = 'bg-slate-300';
  const oddCellColor = 'bg-slate-700';
  const cells = [];

  // Create the cells for the board
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const isEvenCell = (i + j) % 2 === 0;
      const cellColor = isEvenCell ? evenCellColor : oddCellColor;
      const queenSvg = isEvenCell ? '/svg/queen_black.svg' : '/svg/queen_white.svg';
      const isQueenCell = queens?.[i]?.[j] === 'Q';

      cells.push(
        <div key={`${i}-${j}`} className={`h-12 w-12 ${cellColor} flex items-center justify-center`}>
          {isQueenCell && <Image src={queenSvg} alt="queen" width="40" height="40" />}
        </div>,
      );
    }
  }

  // Return the board with the cells
  return <div style={{ display: 'grid', gridTemplateColumns: '1fr '.repeat(n) }}>{cells}</div>;
};

export default Board;
