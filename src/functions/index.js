const countAliveNeighbors = (neighbors, board) => {
  // console.log(board);
  let aliveNeighbors = 0;
  for (let key in neighbors) {
    if (neighbors.hasOwnProperty(key)) {
      if (board[neighbors[key][0]][neighbors[key][1]] !== "dead" ) {
        aliveNeighbors++;
      }
    }
  }
  return aliveNeighbors;
}
export { countAliveNeighbors };

const decideFutureOfCell = (currentState, numberOfNeighbors) => {
  if (currentState === "dead") {
    if (numberOfNeighbors === 3) {
      return "baby"
    } else {
      return "dead";
    }
  } else {
    if (numberOfNeighbors < 2 || numberOfNeighbors > 3) {
      return "dead";
    } else {
      return "old"
    }
  }
}
export {decideFutureOfCell};

const generateBoard = (numberOfRows, numberOfCols) => {
  let board = [];

  for (let x = 0; x < numberOfRows; x++){
    board[x] = [];
    for (let y = 0; y < numberOfCols; y++) {
      board[x][y] = "dead";
    }
  }

  return board;

}
export {generateBoard};

const getNeighbors = (rowId, colId, numberOfRows, numberOfCols) => {

  const lastRow = numberOfRows - 1;
  const lastCol = numberOfCols - 1;

  //get top x,y
  let top;
  if (rowId !== 0) { //if the item is not on the first row
    top = [rowId - 1, colId];
  } else {
    top = [lastRow, colId]
  }

  //get bottom x,y
  let bottom;
  if (rowId !== lastRow) {
    bottom = [rowId + 1, colId];
  } else {
    bottom = [0, colId]
  }

  //get left x,y
  let left;
  if (colId > 0) { //if the item is not in the first col
      left = [rowId, colId - 1 ];
  } else {
      left = [rowId, lastCol ];
  }

  //get right x,y
  let right;
  if (colId !== lastCol) { //if item is not on the last col
    right = [rowId, colId + 1];
  } else {
    right = [rowId, 0];
  }

  //get topL x,y
  let topL;
  if (rowId !== 0 && colId > 0) { //if the item is not on the first row and not in first col
    topL = [rowId - 1, colId - 1];
  } else if ( rowId !== 0 && colId === 0) { // not on first row but on first col
    topL = [rowId - 1, lastCol]
  } else if (rowId === 0 && colId === 0) {// on first row and first col
    topL = [lastRow, lastCol]
  } else {
    topL = [lastRow, colId - 1];
  }

  //get topR x,y
  let topR;
  if (rowId !== 0 && colId !== lastCol) { //if the item is not on the first row and not in last col
    topR = [rowId - 1, colId + 1];
  } else if (rowId !== 0 && colId === lastCol) { // not in first row but on the last col
    topR = [rowId - 1, 0];
  } else if (rowId === 0 && colId === lastCol) { //on first row, last col
    topR = [lastRow, 0];
  } else {
    topR = [lastRow, colId + 1];
  }

  //get bottomL x,y

  let bottomL;
  if (rowId !== lastRow && colId > 0) { //if not in the last row and not in first col
    bottomL = [rowId + 1, colId - 1];
  } else if (rowId !== lastRow && colId === 0) { //not in last row but on first col
    bottomL = [rowId +1, lastCol]
  } else if (rowId === lastRow && colId === 0) {// in the last row and first col
    bottomL = [0, lastCol];
  } else {
    bottomL = [0, colId - 1];
  }

  //get bottomR x,y
  let bottomR;
  if (rowId !== lastRow && colId !== lastCol) { //if not in the last row and not in the last col
    bottomR = [rowId + 1, colId + 1];
  } else if (rowId !== lastRow && colId === lastCol) { //not in last row but on the last col
    bottomR = [rowId + 1, 0]
  } else if (rowId === lastRow && colId === lastCol){
    bottomR = [0, 0];
  } else {
    bottomR = [0 , colId + 1];
  }

  return {
    topL, top, topR, left, right, bottomL, bottom, bottomR
  }


}
export {getNeighbors};

const isEverythingDead = (board) => {
  let answer = true;
  for (let x = 0; x < board.length; x++) {

    for (let y = 0; y < board[x].length; y++ ) {
      if (board[x][y] !== "dead") {
        answer = false;
      }
    }
  }
  return answer;
}
export {isEverythingDead};

const randomizeBoard = (board) => {

  let newBoard = [];
  for (let x = 0; x < board.length; x++){
    newBoard[x] = [];
    for (let y = 0; y < board[x].length; y++) {
      newBoard[x][y] = Math.random() > 0.7 ? "baby" : "dead";
    }
  }

  return newBoard;

}
export {randomizeBoard};
