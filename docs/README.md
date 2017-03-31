## Dogger

### Background

Dogger is a play on the classic game Frogger.  The game is a one-player game that plays out on a square grid. The goal of the game is to move the dog across multiple lanes of traffic and reach the other side of the road safely avoiding getting hit by a vehicle. The rules of the game are as follows;

1) The dog can be moved using the arrow keys.
2) The player has 3 lives (attempts) to safely cross the road and move to the next level.
3) Anytime the dog is hit my the moving traffic, the player starts over with the dog positioned back on the initial side
4) The Game is over when the player clears all levels or runs out of lives.

### Functionality & MVP  

In Dogger the user will be able to:

- [ ] Start, pause, and reset the game board
- [ ] Move the dog right, left, up and down using the arrow keys.

In addition, this project will include:

- [ ] A production Readme

### Wireframes

This app will consist of a single screen with game board, and game controls.
Game controls will include start, reset, and mute buttons.  

![wireframes](./wireframes/dogger.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and game logic.
- `HTML5 Canvas` for DOM manipulation and rendering.
- `create.js` A suite of modular libraries and tools which work together or independently to enable rich interactive content on open web technologies via HTML5
- `keymaster.js` to connect the users keystrokes to the gameplay.
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be three scripts involved in this project:

`moving_object.js`: this script will handle the logic for all moving objects, including setting their position and velocities and determining whether a collision has occurred.

`dog.js`: A movingObject subclass. It will handle the logic for creating the dog and responding to user interaction.

`vehicle.js`: A movingObject subclass. It will handle the logic for creating the vehicles.

`game.js`: Holds a collection of the vehicles and dog. It will handle the logic for creating and updating the vehicles and rendering them on the canvas.


### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running .  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file.  Learn the basics of `canvas` including basic animation.  Goals for the day:

- Get a green bundle with `webpack`
- Learn enough to render an object to the `Canvas` element
- Create classes for vehicles and the dog.

**Day 2**: Dedicate this day to implementing basic game play.  Goals for the day:

- Complete the `game.js` module
- Create two-way traffic controlled by the game class.
- Dog moves according to the user input.

**Day 3**: Create the game logic.  Goals for the day:

- Build out game logic for collisions.
- Build out game logic for game over (won/lost).


**Day 4**: Install the controls for the user to interact with the game.  Style the frontend, making it polished and professional.  Goals for the day:

- Create controls for game start, reset, and mute sound.
- Have a styled `Canvas`, nice looking controls and title.
- If time permits: have multiple levels with increasing difficulty.


### Bonus features

- [ ] Levels.
- [ ] Player scoreboard.
