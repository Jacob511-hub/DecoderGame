import { createContext, useContext, useState, ReactNode } from 'react';

type AnswerArrayContextType = {
  AnswerArray: number[];
  generateAnswerArray: () => void;
};

const AnswerArrayContext = createContext<AnswerArrayContextType | undefined>(undefined);

const getAnswerArray = (): number[] => {
  return Array.from({ length: 4 }, () => Math.floor(Math.random() * 6));
};

export const AnswerArrayProvider = ({ children }: { children: ReactNode }) => {
  const [AnswerArray, setAnswerArray] = useState<number[]>(getAnswerArray());

  const generateAnswerArray = () => {
    setAnswerArray(getAnswerArray());
  };

  return (
    <AnswerArrayContext.Provider value={{ AnswerArray, generateAnswerArray }}>
      {children}
    </AnswerArrayContext.Provider>
  );
};

export const useAnswerArray = (): AnswerArrayContextType => {
  const context = useContext(AnswerArrayContext);
  if (!context) {
    throw new Error('useAnswerArray must be used within an AnswerArrayProvider');
  }
  return context;
};