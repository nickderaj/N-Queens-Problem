import Button from '@/elements/buttons/Button';
import { useState } from 'react';
import Board from './Board';
import { solveNQueens } from './helpers/solver';

const BoardInput: React.FC = () => {
  const [numRows, setNumRows] = useState<number>(4);
  const [selectedSolution, setSelectedSolution] = useState<number>(0);
  const [solutions, setSolutions] = useState<string[][]>([]);
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSolve = () => {
    if (isLocked) return;
    setIsLocked(true);

    const solns = solveNQueens(numRows);
    if (solns.length > 0) {
      setSolutions(solns);
      setSelectedSolution(0);
    } else {
      alert('There are no solutions for this board size.');
    }
    setIsLocked(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(event.target.value);
    setError('');
    setSolutions([]);
    setSelectedSolution(0);

    if (value < 1) {
      value = 1;
      setError('Minimum of 1x1 allowed!');
    }
    if (value > 9) {
      value = 9;
      setError('Maximum of 9x9 allowed!');
    }

    setNumRows(value);
  };

  const handlePrev = () => {
    setSelectedSolution((prev) => (prev === 0 ? solutions.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedSolution((prev) => (prev === solutions.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-md font-cairo">Number of rows/columns:</p>
      <input
        type="number"
        onChange={handleInputChange}
        className="border-indigo-500 border-2 p-2 rounded-md mb-4"
        defaultValue={numRows}
      />
      {error && <p className="text-md font-cairo text-rose-600">{error}</p>}

      <Board n={numRows} queens={solutions[selectedSolution]} />
      {solutions.length === 0 && (
        <div className="flex mt-4 gap-2">
          <Button onClick={handleSolve} title="Solve" disabled={isLocked} />
        </div>
      )}
      {solutions.length > 0 && (
        <div className="mt-4 justify-center items-center flex flex-col">
          <p className="text-md font-cairo text-slate-800 mb-2 font-cairo text-lg">
            {selectedSolution + 1} / {solutions.length}
          </p>
          <div className="flex gap-2">
            <Button onClick={handlePrev} title="Previous" disabled={isLocked} variant="secondary" />
            <Button onClick={handleNext} title="Next" disabled={isLocked} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BoardInput;
