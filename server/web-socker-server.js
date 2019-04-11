var SocketServer = require('ws').Server;

const initializeWebSocket = (app) => {
  console.log('Initializing webSocket server')
  const wss = new SocketServer({ server: app })
  setUpEventHandlers(wss)
  console.log('socket configured')
  return app;
}

const setUpEventHandlers = (socket) => {
  socket.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('close', () => console.log('Client disconnected'));
  });
}


module.exports = initializeWebSocket;

