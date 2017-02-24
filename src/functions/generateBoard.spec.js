// generate a clean board
import { generateBoard } from './';
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

it('receives 3 by 3, expects to generate a board with everything dead', () => {
    expect(generateBoard(3,3)).toEqual(board3x3EverythingDead);
});

it('receives 3 by 4, expects to generate a board with everything dead', () => {
    expect(generateBoard(3,4)).toEqual(board3x4EverythingDead);
});

it('receives 3 by 3, expects to generate a board with everything dead', () => {
    expect(generateBoard(3,1)).toEqual(board3x1EverythingDead);
});
