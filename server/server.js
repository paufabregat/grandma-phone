const io = require('socket.io')();
const mqtt = require('mqtt');
const c = require('./constants');

// TODO change value depending on environment
const deviceHost = '192.168.1.37'
const mqqtClient  = mqtt.connect(`mqtt://${deviceHost}`);

// Enforced Snips TCP MQTT connection
mqqtClient.on('connect', function () {
  console.log('Connected to MQTT broker');
  // TODO iterate over queues to subscribe
  c.intentNames.forEach(intentName => {
      console.log(`Subscribe to MQTT ${c.queueName}${intentName}`);
      mqqtClient.subscribe(`${c.queueName}${intentName}`);
  })
})

mqqtClient.on('message', (topic, message) => {
  // There is just one user connected per GrandmaPhone device
  console.log(topic, message.toString());
  const intentName = topic.substr(topic.lastIndexOf('/') + 1);
  io.sockets.emit(intentName, message.toString());
});

// Socket IO to reach web app
const port = 8000;
io.on('connection', (client) => {
  console.log(`Client ${client.id} connected`);
});

io.listen(port);
