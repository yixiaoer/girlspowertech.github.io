
// thanks to so interesting program: https://github.com/petermeissner/crossword.r
import data from "./crossInfo.json";

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