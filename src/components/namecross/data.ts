
// thanks to so interesting program: https://github.com/petermeissner/crossword.r
export const data = [
  {
    "row": 10,
    "col": 1,
    "length": 6,
    "direction": "right",
    "word": "CITRUS",
    "clue": "A genus of flowering trees and shrubs in the rue family, Rutaceae."
  },
  {
    "row": 1,
    "col": 10,
    "length": 4,
    "direction": "down",
    "word": "MEOW",
    "clue": "The sound a cat makes."
  },
  {
    "row": 1,
    "col": 1,
    "length": 5,
    "direction": "right",
    "word": "ELENA",
    "clue": "A popular feminine given name."
  },
  {
    "row": 1,
    "col": 1,
    "length": 6,
    "direction": "down",
    "word": "EUNICE",
    "clue": "A name of Greek origin meaning 'good victory'."
  },
  {
    "row": 6,
    "col": 2,
    "length": 5,
    "direction": "down",
    "word": "GUOYI",
    "clue": "A common given name."
  },
  {
    "row": 4,
    "col": 1,
    "length": 3,
    "direction": "right",
    "word": "IAN",
    "clue": "A given name often used as a diminutive form of John."
  },
  {
    "row": 6,
    "col": 5,
    "length": 5,
    "direction": "down",
    "word": "MENRU",
    "clue": "A given name."
  },
  {
    "row": 8,
    "col": 5,
    "length": 4,
    "direction": "right",
    "word": "NORA",
    "clue": "A common feminine given name."
  }
]

type InputData = {
  row: number;
  col: number;
  direction: string;
  word: string;
  clue: string;
}

type crossItem = {
  [key: string]: {
    clue: string;
    answer: string;
    row: number;
    col: number;
  }
}

type OutputData = {
  down: crossItem;
  across: crossItem;
}

function transformData(input: InputData[]): OutputData {
  const output: OutputData = { down: {}, across: {} };
  let downCounter = 1;
  let acrossCounter = 1;

  input.forEach((item) => {
    const newItem = {
      clue: item.clue,
      answer: item.word,
      row: item.row,
      col: item.col,
    };

    if (item.direction === 'down') {
      output.down[downCounter.toString()] = newItem;
      downCounter++;
    } else if (item.direction === 'right') {
      output.across[acrossCounter.toString()] = newItem;
      acrossCounter++;
    }
  });

  return output;
}
export const transformedData = transformData(data);

export const getWord = (direction: 'down' | 'across', number: string) => {
  return transformedData[direction][number].answer;
}

export default transformedData;