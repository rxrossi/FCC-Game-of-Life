import { isEverythingDead } from './';

const board3x3SomeAlive = [
  [ "dead",    "baby",  "dead"  ],
  [ "dead",    "dead",  "old"   ],
  [ "old",     "old",   "dead"  ],
]

const board3x3EverythingDead = [
  [ "dead",   "dead",  "dead" ],
  [ "dead",   "dead",  "dead" ],
  [ "dead",   "dead",  "dead" ],
]

it('receive a board with some cells that are not dead', () => {
  expect(isEverythingDead(board3x3SomeAlive)).toEqual(false);
});

it('receive a board with everything dead', () => {
  expect(isEverythingDead(board3x3EverythingDead)).toEqual(true);
});
