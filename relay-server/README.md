# Relay Websocket Server
The relay websocket server is a middleware to enable websocket communication in between the voice-assistant and the web app.

## Why this server?
The SNIPS assistant publishes to a specific intent queue in the MQTT server every time and intent is recognized. The web app needs to read from that queue so it can react and handle specific actions. The app also needs to publish to other queues of the MQTT server in order to send a text that will be voiced out by the assistant.

The problem is that the [current implementation](https://github.com/snipsco/snips-platform-documentation/wiki/6.--Miscellaneous#platform-configuration) of the SNIPS MQTT server can be just configured to handle MQTT communication. This is a no-go for a web app because for security reasons it can not open TCP sockets.

The short-term solution is a websocket server that connects to the MQTT server and reacts to its changes emitting events to the web app using websockets. YAY! ✨

## Run the server
The first thing you will need to do is to clone the repository and navigate to the server folder.

~~~
git clone https://github.com/paufabregat/grandma-phone
cd grandma-phone/server
~~~

You will need a node version >= 6 to run the app. Next, install all the dependencies.
~~~
npm install
~~~

and finally run the websocket server on `localhost:8000`
~~~
node server
~~~
By default it tries to connect to the SNIPS MQTT server at `localhost`

### Connect to MQTT server running on Raspberry Pi
For development purposes, the easiest is to run the websocket server locally on your laptop and read and publish from the SNIPS MQTT server running in the Raspberry Pi. Therefore we need to tell the server what is the IP or hostname of the Raspberry Pi in the local network. For a freshly installed Pi with Raspbian the hostname is `raspberrypi.local`

Then run the server as follows:
~~~
node server --piIp=your_Raspberry_Pi_IP
~~~
