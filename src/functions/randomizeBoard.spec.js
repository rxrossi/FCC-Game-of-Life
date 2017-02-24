// generate a clean board

import { isEverythingDead } from './';
import { randomizeBoard } from './';

const board3x3EverythingDead = [
  [ "dead",   "dead",  "dead" ],
  [ "dead",   "dead",  "dead" ],
  [ "dead",   "dead",  "dead" ],
]

const board3x4EverythingDead = [
  [ "dead",   "dead",  "dead", "dead" ],
  [ "dead",   "dead",  "dead", "dead" ],
  [ "dead",   "dead",  "dead", "dead" ],
]

const board3x1EverythingDead = [
  [ "dead" ],
  [ "dead" ],
  [ "dead" ]
]



it('receives a board with everything dead, should return a new board with some babies', () => {
    expect(
      isEverythingDead(randomizeBoard(board3x3EverythingDead))
    )
    .toEqual(false);

    expect(
      isEverythingDead(randomizeBoard(board3x3EverythingDead))
    )
    .toEqual(false);
});
