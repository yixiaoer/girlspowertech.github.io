
import React, { useContext, FC, useState, useCallback, useRef, useEffect } from 'react';
import Crossword, { CrosswordContext, CrosswordImperative, ThemeProvider } from 'react-crossword';
import data, { getWord } from "./data";
import "./style.scss";


type nameCrossProps = {
  className?: string;
  onSelect: (name: string) => void;
}

const NameCross: FC<nameCrossProps> = ({ onSelect }) => {
  const crossword = useRef<CrosswordImperative>(null);
  const fillAllAnswers = useCallback(() => {
    crossword.current?.fillAllAnswers();
  }, []);

  useEffect(() => {
    fillAllAnswers();
  }, []);

  return (
    <div className="crossword">
      <ThemeProvider theme={ {
        focusBackground: 'pink',
        highlightBackground: '#e6e6e6',
      } }
      >
        <Crossword
          ref={ crossword }
          data={ data }
          onCellSelected={ (
            direction, number, row, col,
          ) => {
            number && onSelect(getWord(direction, number));
          } }
        />
      </ThemeProvider>
    </div>
  );
}


export default NameCross;