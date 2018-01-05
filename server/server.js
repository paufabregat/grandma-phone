const io = require('socket.io')();
const mqtt = require('mqtt');
const deviceHost = '192.168.1.40' // TODO change value depending on environment
const mqqtClient  = mqtt.connect(`mqtt://${deviceHost}`);

// Enforced Snips TCP MQTT connection
mqqtClient.on('connect', function () {
  console.log('Connected to MQTT broker');
  mqqtClient.subscribe('hermes/intent/callContact');
})

mqqtClient.on('message', (topic, message) => {
  // There is just one user connected per GrandmaPhone device
  console.log(topic, message.toString());
  io.sockets.emit(topic, message.toString());
});

// Socket IO to reach web app
const port = 8000;
io.on('connection', (client) => {
  // here you can start emitting events to the client
  console.log(`Client ${client.id} connected`);

});

io.listen(port);
