
import React, { useContext, FC, useState, useCallback, useRef, useEffect } from 'react';
import Crossword, { CrosswordContext, CrosswordImperative, ThemeProvider } from 'react-crossword';
import data, { getWord } from "./data";
import "./style.scss";


type nameCrossProps = {
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
    <ThemeProvider theme={ {
      focusBackground: 'pink',
      highlightBackground: '#c3c3c3',
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
  );
}


export default NameCross;