const {
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  MOVE_LEFT_ARROW_KEY,
  MOVE_UP_ARROW_KEY,
  MOVE_RIGHT_ARROW_KEY,
  MOVE_DOWN_ARROW_KEY,
  MESSAGES,} = require("./constants");

let connection;

// Handle the key presses
const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input
  switch (key) {
    case "\u0003":
      process.exit();
      break;
    case MOVE_LEFT_KEY:
    case MOVE_LEFT_ARROW_KEY:   // Left Arrow Key
      connection.write("Move: left");
      break;
    case MOVE_UP_KEY:
    case MOVE_UP_ARROW_KEY:   // Up Arrow Key
      connection.write("Move: up");
      break;
    case MOVE_RIGHT_KEY:
    case MOVE_RIGHT_ARROW_KEY:   // Right Arrow Key
      connection.write("Move: right");
      break;
    case MOVE_DOWN_KEY:
    case MOVE_DOWN_ARROW_KEY:   // Down Arrow Key
      connection.write("Move: down");
      break;
    default:
      if (MESSAGES[key]) {
        connection.write("Say: " + MESSAGES[key]);
      }
      break;
  }
};

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input


  stdin.on("data", handleUserInput);

  return stdin;   // return the stdin object so we can use it elsewhere in the program
};


module.exports = setupInput;