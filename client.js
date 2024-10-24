const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // log data from the server to the console
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // on connection to the server:
  // - write a message to our console
  // - send the server our username
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: Rod");

    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 50);

    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 50);
  });

  // conn.on("connect", () => {
  //   conn.write("Move: up");
  // });

  return conn;
};

module.exports = connect;