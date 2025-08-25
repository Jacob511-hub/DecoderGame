import React from 'react';
import Board from './Board';
import Guide from './Guide';
import { AnswerArrayProvider } from './AnswerArrayContext';

const App: React.FC = () => {
  return (
    <AnswerArrayProvider>
      <div className="App">
        <Guide />
        <Board />
      </div>
    </AnswerArrayProvider>
  );
};

export default App;
