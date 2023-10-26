const net = require('net');
const { IP, PORT, NAME, CONNECTED } = require('./constants')

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  //function to alert that connection has been successfully established
  conn.on("connect", () => {
    console.log(CONNECTED);
  });

  //function to send player name when it connects to server
  //function to send a "Move: up" command as soon as it connects
  conn.on("connect", () => {
    conn.write(NAME);
    // conn.write('Move: up');
  });


  // function to handle incoming data and console.log it for the player
  conn.on("data", (data) => {
    console.log('player says:', data);
  });  

  // returning the conn object from the connect function allow us to interact with the server
  return conn;
};

module.exports = {
  connect,
};