const IP = 'localhost';
const PORT = 50541;
const MOVE_UP_KEY = 'w';
const MOVE_LEFT_KEY = 'a';
const MOVE_DOWN_KEY = 's';
const MOVE_RIGHT_KEY = 'd';
const MOVE_LEFT_ARROW_KEY = "\u001b[D";   // Left Arrow Key
const MOVE_UP_ARROW_KEY = "\u001b[A";   // Up Arrow Key
const MOVE_RIGHT_ARROW_KEY = "\u001b[C";   // Right Arrow Key
const MOVE_DOWN_ARROW_KEY = "\u001b[B";   // Down Arrow Key

const MESSAGES = {
  p: "PWNED",
  c: "Winner, chicken dinner.",
};

module.exports = {
  IP,
  PORT,
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  MOVE_LEFT_ARROW_KEY,
  MOVE_UP_ARROW_KEY,
  MOVE_RIGHT_ARROW_KEY,
  MOVE_DOWN_ARROW_KEY,
  MESSAGES,
};