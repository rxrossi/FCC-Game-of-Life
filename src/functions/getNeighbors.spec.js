/*
00 01 02
10 11 12
20 21 22
*/

import { getNeighbors } from './';

it('tests an item in the middle', () => {
    expect(getNeighbors(1, 1, 3, 3)).toEqual({
      topL: [0,0],
      top: [0,1],
      topR: [0,2],
      left: [1,0],
      right: [1,2],
      bottomL: [2,0],
      bottom: [2,1],
      bottomR: [2,2]

    });
});

it('tests an item in the middle of first row', () => {
    expect(getNeighbors(0, 1, 3, 3)).toEqual({ // test an item in the middle
      topL: [2,0],
      top: [2,1],
      topR: [2,2],
      left: [0,0],
      right: [0,2],
      bottomL: [1,0],
      bottom: [1,1],
      bottomR: [1,2]
    });
});

it('tests an item in the middle of last row', () => {
    expect(getNeighbors(2, 1, 3, 3)).toEqual({ // test an item in the middle
      topL: [1,0],
      top: [1,1],
      topR: [1,2],
      left: [2,0],
      right: [2,2],
      bottomL: [0,0],
      bottom: [0,1],
      bottomR: [0,2],
    });
});

it('tests an item in the mildle of first col', () => {
    expect(getNeighbors(1, 0, 3, 3)).toEqual({ // test an item in the middle
      topL: [0,2],
      top: [0,0],
      topR: [0,1],
      left: [1,2],
      right: [1,1],
      bottomL: [2,2],
      bottom: [2,0],
      bottomR: [2,1]
    });
});

it('tests an item in the mildle of last col', () => {
    expect(getNeighbors(1, 2, 3, 3)).toEqual({
      topL: [0,1],
      top: [0,2],
      topR: [0,0],
      left: [1,1],
      right: [1,0],
      bottomL: [2,1],
      bottom: [2,2],
      bottomR: [2,0]
    });
});

it('tests an item in the first row, first col', () => {
  expect(getNeighbors(0, 0, 3, 3)).toEqual({
      topL: [2,2],
      top: [2,0],
      topR: [2,1],
      left: [0,2],
      right: [0,1],
      bottomL: [1,2],
      bottom: [1,0],
      bottomR: [1,1]
  });
});

it('tests an item in the last row, first col', () => {
  expect(getNeighbors(2, 0, 3, 3)).toEqual({
      topL: [1,2],
      top: [1,0],
      topR: [1,1],
      left: [2,2],
      right: [2,1],
      bottomL: [0,2],
      bottom: [0,0],
      bottomR: [0,1]
  });
})

it('tests an item in the first row, last col', () =>{
  expect(getNeighbors(0, 2, 3,3)).toEqual({
      topL: [2,1],
      top: [2,2],
      topR: [2,0],
      left: [0,1],
      right: [0,0],
      bottomL: [1,1],
      bottom: [1,2],
      bottomR: [1,0]
  });
});

it('tests an item on the last row, last col', () =>{
  expect(getNeighbors(2, 2, 3, 3)).toEqual({
      topL: [1,1],
      top: [1,2],
      topR: [1,0],
      left: [2,1],
      right: [2,0],
      bottomL: [0,1],
      bottom: [0,2],
      bottomR: [0,0]
  });
});
