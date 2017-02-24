// simply receives the currentState and the number of neighbors and decides what happens to the cell based on game of life rules

import { decideFutureOfCell } from './';

it('receives a baby with 2 neighbors', () => {
  expect(decideFutureOfCell("baby", 2)).toEqual("old");
});

it('receives a baby with 3 neighbors', () => {
  expect(decideFutureOfCell("baby", 3)).toEqual("old");
});

it('receives a baby with 1 neighbor', () => {
  expect(decideFutureOfCell("baby", 1)).toEqual("dead");
});

it('receives a baby with 4 neighbor', () => {
  expect(decideFutureOfCell("baby", 4)).toEqual("dead");
});

it('receives a old with 2 neighbors', () => {
  expect(decideFutureOfCell("old", 2)).toEqual("old");
});

it('receives a old with 7 neighbors', () => {
  expect(decideFutureOfCell("old", 7)).toEqual("dead");
});

it('receives a old with 2 neighbors', () => {
  expect(decideFutureOfCell("old", 1)).toEqual("dead");
});
