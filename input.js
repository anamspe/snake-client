// setup interface to handle user input from stdin
const setupInput = function() {
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
  // checks for ctrl+c to terminate the game, otherwie it'll keep running
  if (key === '\u0003') {
    process.exit();
    ;
  }
};


module.exports = {
  setupInput,
}