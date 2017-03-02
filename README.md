#A React with Redux Conway's Game of Life

There is a live version on [this link](https://rxrossi.github.io/FCC-Game-of-Life/)

##About the game
See this [Wikipedia article](https://en.wikipedia.org/wiki/Conway's_Game_of_Life) for more information.

To understand it superficially:

* A cell that is alive will continue alive if it has two or three neighbors, with less it dies by solitude, with more it dies by overpopulation
* Any space with exactly three neighbors will generate a new cell (light blue)
* The dark blue cells are cells that are alive for more than one generation
* The light blue cells are babies, just appeared

##In this version:

About the map:
* Cells on the last column are neighbors of the cells on the first column at the same row
* Cells on the last row are neighbors of the cells on the first row at the same column

What you can do:
* Click a space to put a baby, or click a alive cell to kill it
* Adjust board size as you want, it will try to fit your screen
* Pause, go step by step or let it play alone
* Adjust speed in ms
* Clear the board
* Generate a new random board

##Work locally:
Clone and then run the commands

npm install
npm start

The app was created using create-react-app, it has unit testing
