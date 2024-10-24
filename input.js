let connection;

// Handle the key presses
const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  switch (key) {
    case "\u0003":
      process.exit();
      break;
    case "a":
    case "\u001b[D":   // Left Arrow Key
      connection.write("Move: left");
      break;
    case "w":
    case "\u001b[A":   // Up Arrow Key
      connection.write("Move: up");
      break;
    case "d":
    case "\u001b[C":   // Right Arrow Key
      connection.write("Move: right");
      break;
    case "s":
    case "\u001b[B":   // Down Arrow Key
      connection.write("Move: down");
      break;
  }
};

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input


  stdin.on("data", handleUserInput);

  return stdin;   // return the stdin object so we can use it elsewhere in the program
};


module.exports = setupInput;