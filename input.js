const connect = require('./client');
const net = require('net');

let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Register an event listener for stdin, the callback is a function that runs when you receive input from the keyboard
  stdin.on("data", handleUserInput);

  // Returning the stdin object from the setupInput function allows us to interact with the server via keyboard input
  return stdin;
};


const handleUserInput = function(key) {
  // checks for ctrl+c to terminate the game, otherwise it'll keep running
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    connection.write('Move: up');
  }

  if (key === 'a') {
    connection.write('Move: left');
  }

  if (key === 's') {
    connection.write('Move: down');
  }

  if (key === 'd') {
    connection.write('Move: right');
  }

  if (key === '1') {
    connection.write('Say: See ya!');
  }

  if (key === '2') {
    connection.write('Say: Are you sure you can keep up?');
  }

  if (key === '3') {
    connection.write("Say: I'm the best!");
  }

};

module.exports = {
  setupInput,
};