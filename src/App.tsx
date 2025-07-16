import React from 'react';
import Board from './Board';
import { AnswerArrayProvider } from './AnswerArrayContext';

const App: React.FC = () => {
  return (
    <AnswerArrayProvider>
      <div className="App">
        <Board />
      </div>
    </AnswerArrayProvider>
  );
};

export default App;
