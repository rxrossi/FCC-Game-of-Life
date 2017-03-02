import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import './index.css'

//Todo
/*
  - need to build a better UI
*/

//Project Patterns

// initialConfig
  const initialConfig = {
    numberOfRows: 25,
    numberOfCols: 25,
    boardWidth: 600,
    running: true,
    generations: 0,
    interval: 200
  }

//Functions importing
  import { countAliveNeighbors } from './functions';
  import { decideFutureOfCell } from './functions';
  import { generateBoard } from './functions';
  import { getNeighbors } from './functions';
  import { isEverythingDead } from './functions';
  import { randomizeBoard } from './functions';

//initialSate
  const initialState = {
    board: randomizeBoard(generateBoard(initialConfig.numberOfRows, initialConfig.numberOfCols)),
    gameConfig: initialConfig
  }

//Actions

  const nextGen = (numberOfRows,numberOfCols,board) => ({
    type: 'CALC_NEXT_GENERATION',
    numberOfRows, 
    numberOfCols, 
    everythingDead: isEverythingDead(board)
  })

  const clearBoard = (numberOfRows,numberOfCols) => ({
    type: 'CLEAR_BOARD',
    board: generateBoard(numberOfRows,numberOfCols)
  })

  const randomizeCellStates = (numberOfRows, numberOfCols) => ({
    type: 'RANDOMIZE_CELL_STATES',
    board: randomizeBoard(generateBoard(numberOfRows,numberOfCols))
  })

  const toggleRunningGenerations = () => ({
    type: 'TOGGLE_RUNNING_GENERATIONS'
  });

  const stopRunningGenerations = () => ({
    type: 'STOP_RUNNING_GENERATIONS',
  })

  const onCellClick = (rowKey, colKey) => ({
    type: 'USER_CLICKED_A_CELL',
    rowKey,
    colKey
  })

  const setRowsAndCols = (rows, cols) => ({
    type: 'SET_ROWS_AND_COLS',
    rows,
    cols,
    board: generateBoard( rows, cols )
  });

  const setGenerationsInterval = (interval) => ({
    type: 'SET_GENERATIONS_INTERVAL',
    interval
  })

//Containers
  class Board extends React.Component {
    constructor () {
      super();

      this.cycler = this.cycler.bind(this);
    }

    cycler () {
      const { numberOfRows, numberOfCols, board, stopRunningGenerations, nextGen } = this.props;
    
      this.interval = setInterval(() => {
        if (isEverythingDead(board)) {
          stopRunningGenerations()
        }
        if (this.props.config.running) {
          nextGen(numberOfRows, numberOfCols, board);
        }
      }, this.props.config.interval);
    }

    componentDidMount () {
      this.cycler();
    }

    componentDidUpdate() {
      clearInterval(this.interval);
      this.cycler();
    }

    componentWillUnmount () {
      clearInterval(this.interval)
    }

    render() {
      const {
        nextGen,
        clearBoard,
        randomizeCellStates,
        toggleRunningGenerations,
        board,
        numberOfCols,
        numberOfRows,
        onCellClick,
        setRowsAndCols,
        setGenerationsInterval
      } = this.props;
      const { generations, interval, running } = this.props.config;

      let inputNumberOfRows;
      let inputNumberOfCols;
      let inputInterval;

      return (
        <div>
          <div className="header">
            <button onClick={ () => nextGen(numberOfRows,numberOfCols,board) }>Calc next Generation</button>
            <button onClick={ () => clearBoard(numberOfRows,numberOfCols) }>Clear the board</button>
            <button onClick={ () => randomizeCellStates(numberOfRows,numberOfCols) }>Randomize the board</button>
            <button onClick={ () => toggleRunningGenerations() }>
							{running ? "Stop" : "Play" }
						</button>
            <p> Generations: {generations} </p>
            <label>Rows: </label>
            <input type="number"
              value={numberOfRows}
              min="1"
              max="200"
              ref={ node => inputNumberOfRows = node}
              onChange={ () => setRowsAndCols(inputNumberOfRows.value, numberOfCols) }
            />
            <label>Columns: </label>
            <input type="number"
              value={numberOfCols}
              min="1"
              max="200"
              ref={ node => inputNumberOfCols = node}
              onChange={ () => setRowsAndCols(numberOfRows, inputNumberOfCols.value) }
            />
            <label>Speed: </label>
            <input
              type="number"
              value={interval}
              min="1"
              ref={ node => inputInterval = node}
              onChange={ () => setGenerationsInterval(inputInterval.value) }
            /> ms
          </div>
          <div className="board" style={{transition: interval/2+'ms'}}>
              {
                board.map( (row, rowKey) => {
                  return (
                    <div className="row" key={rowKey}
                      style={{
                        transition: '500ms',
                        display: "block"
                    }}>
                      {
                        row.map((cell, cellKey) => {
                          return <div className={cell}
                                      key={rowKey+''+cellKey}
                                      style={{
                                        width: (window.innerWidth*0.9) < (window.innerHeight*0.65)
                                        ? (window.innerWidth*0.9/numberOfCols)
                                        : (window.innerHeight * 0.65/numberOfCols),
                                        height: (window.innerWidth*0.9) < (window.innerHeight*0.65)
                                        ? (window.innerWidth*0.9/numberOfCols)
                                        : (window.innerHeight * 0.65/numberOfCols),
                                        borderRadius: 1,
                                        transition: interval/2+'ms'
                                      }}
                                      onClick={ () =>  onCellClick(rowKey, cellKey) }>

                                      </div>
                        })
                      }
                    </div>

                  )
                })
              }
          </div>
          <div className="footer">
            <p>Clicking a dead cell will turn it into a new cell, clicking on a cell that is alive will kill it</p>
						<a href="https://github.com/rxrossi/FCC-Game-of-Life"> Code on Github </a>
          </div>
        </div>
      )
    }
  }
  const mapBoardStateToProps = (state) => ({
    board: state.board,
    boardWidth: state.gameConfig.boardWidth,
    numberOfRows: state.gameConfig.numberOfRows,
    numberOfCols: state.gameConfig.numberOfCols,
    config: state.gameConfig
  })
  const mapBoardDispatchToProps = {
    nextGen, clearBoard, randomizeCellStates,
    toggleRunningGenerations,
    onCellClick, setRowsAndCols, setGenerationsInterval
  }
  Board = connect(mapBoardStateToProps, mapBoardDispatchToProps)(Board);

//Reducers
  const board = (state=[], action) => {
    switch (action.type) {
      case 'RANDOMIZE_CELL_STATES':
        return action.board;
      case 'SET_ROWS_AND_COLS':
        return action.board;
      case 'CLEAR_BOARD':
        return action.board;
      case 'USER_CLICKED_A_CELL':
        return [
          ...state.slice(0, action.rowKey),
          [
            ...state[action.rowKey].slice(0, action.colKey),
            state[action.rowKey][action.colKey] !== 'dead' ? 'dead' : 'baby',
            ...state[action.rowKey].slice(action.colKey +1),
          ],
          ...state.slice(action.rowKey+1)
        ]
      case 'CALC_NEXT_GENERATION':
        return state.map( (row, rowKey) => row.map( (cell, colKey) => {

          return decideFutureOfCell(
            cell,
            countAliveNeighbors(
              getNeighbors(rowKey, colKey, action.numberOfRows, action.numberOfCols), state
            )
          )

        } ) )

      default:
        return state;
    }
  }

  const gameConfig = (state = [], action) => {
    switch (action.type) {
      case 'TOGGLE_RUNNING_GENERATIONS':
        return {
          ...state,
          running: !state.running 
        }
      case 'STOP_RUNNING_GENERATIONS':
        return {
          ...state,
          running: false
        }
      case 'CALC_NEXT_GENERATION':
        if (action.everythingDead) return state;
        return {
          ...state,
          generations: state.generations + 1
        }
      case 'CLEAR_BOARD':
      case 'RANDOMIZE_CELL_STATES':
        return {
          ...state,
          generations: 0
        }
      case 'SET_ROWS_AND_COLS':
        return {
          ...state,
          numberOfRows: action.rows <= 200 ? action.rows : 200,
          numberOfCols: action.cols <= 200 ? action.cols : 200,
          generations: 0
        }
      case 'SET_GENERATIONS_INTERVAL':
        return {
          ...state,
          interval: action.interval > 0 ? action.interval : 1
        }
      default:
      return state;
    }
  }

  const indexReducer = combineReducers({
    board,
    gameConfig
  })

//Store
  const store = createStore(indexReducer, initialState);
// console.log(store.getState());

//Render@
  ReactDOM.render(
    <Provider store={store}>
      <div>
          <Board />
      </div>
    </Provider>,
    document.getElementById('root')
  );
