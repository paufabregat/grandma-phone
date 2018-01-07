const io = require('socket.io')();
const mqtt = require('mqtt');
const c = require('./constants');

// TODO change value depending on environment
const deviceHost = '192.168.1.37'
const mqqtClient  = mqtt.connect(`mqtt://${deviceHost}`);

// TCP MQTT connection - only option on SNIPS side for now
mqqtClient.on('connect', function () {
  console.log('Connected to MQTT broker');
  c.intentNames.forEach(intentName => {
      console.log(`Subscribe to MQTT ${c.intentQueue}${intentName}`);
      mqqtClient.subscribe(`${c.intentQueue}${intentName}`);
  })
})

mqqtClient.on('message', (topic, message) => {
  // There is just one user connected per GrandmaPhone device
  console.log(topic, message.toString());
  const intentName = topic.substr(topic.lastIndexOf('/') + 1);
  io.sockets.emit(intentName, message.toString());
});

const port = 8000;
io.on('connection', (client) => {
  console.log(`Client ${client.id} connected`);

  client.on(c.dialogueQueues.end, payload => {
    console.log('Sending text to the end session queue');
    const endQueue = `${c.dialogueManagerQueue}${c.dialogueQueues.end}`;
    mqqtClient.publish(endQueue, JSON.stringify(payload));
  })

  client.on(c.dialogueQueues.continue, payload => {
    console.log('Sending text to the continue session queue');
    const continueQueue = `${c.dialogueManagerQueue}${c.dialogueQueues.continue}`;
    mqqtClient.publish(continueQueue, JSON.stringify(payload));
  })
});

io.listen(port);
