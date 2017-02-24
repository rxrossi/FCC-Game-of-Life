// Receibe the examples bellow, neighbors from getNeighbors function and board from the board as shown on the examples bellow, and the function should return a numver that will be used on DediceFutureOfCell
import { countAliveNeighbors } from './';
const neighborsExample3x3Middle = {
  topL: [0,0],
  top: [0,1],
  topR: [0,2],
  left: [1,0],
  right: [1,2],
  bottomL: [2,0],
  bottom: [2,1],
  bottomR: [2,2]
}

const board3x3Case1 = [
  [ "dead",   "alive",  "dead"  ],
  [ "dead",   "dead",   "alive" ],
  [ "alive",  "alive",  "dead"  ],
]

const neighborsExample3x3MiddleLeft = {
    topL: [0,2],
    top: [0,0],
    topR: [0,1],
    left: [1,2],
    right: [1,1],
    bottomL: [2,2],
    bottom: [2,0],
    bottomR: [2,1]
}

const board3x3Case2 = [
  [ "dead",     "baby",     "baby"    ],
  [ "dead",     "old",      "old"     ],
  [ "dead",     "dead",     "old"     ],
]

it('receives neighborsExample3x3Middle and board3x3Case1 and return the number of neighbors alive', () => {
  expect(countAliveNeighbors(neighborsExample3x3Middle, board3x3Case1)).toEqual(4);
});

it('receives neighborsExample3x3MiddleLeft and board3x3Case2 and return the number of neighbors alive', () => {
  expect(countAliveNeighbors(neighborsExample3x3MiddleLeft, board3x3Case2)).toEqual(5);
});
