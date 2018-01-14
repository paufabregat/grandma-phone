# Grandma Phone
Demo app to enable voice-assisted video calls for seniors.

## Motivation
Technology has brought groundbreaking changes in the way human communicate. It is amazing that we can see friends and relatives from all over the world without leaving our living room, just by getting into our phones or laptops and setting a video-call. Allowing us to strengthen relationships even if people are physically far from each other.

Technology is great but many times is not suiting everybody's needs and knowledge and makes things difficult to navigate interfaces and devices. This is especially true for many seniors and people with disabilities. The former group have not caught up with the rapid tech changes and the later need products and services designed to tackle the way they best interact with the environment.

Grandma phone is born from the need to communicate via video-call with non-tech-savvy seniors. This believes that designers and developers can make technology more accessible to everybody if we take a user-centric design approach to deliver the best possible experience.

## Infrastructure
Currently, the app is a POC to proof voice assisted communication with a web app interface suited for senior needs. A real setup consists of Raspberry Pi running an Electron app and streaming the interface in a regular TV. The user interacts with the app using voice commands.

Briefly there are main 3 components:
- **Client**: User interface suited for senior needs. It is very visual and simple. Enables the user to pick a contact to call and set video and audio stream.
- **Relay Server**:  Relay server to allow websocket communication in between the voice assistant and the web app. It relays payloads from one end to the other.
- **Assistant**: Voice assistant created thanks to the awesome [SNIPS](http://snips.ai/) tech. The assistant receives commands that in turn are used by the web app to trigger actions and also receives commands to communicate with the user using Text-To-Speech (TTS)

## Setup
Please, take a look at the [client](https://github.com/paufabregat/grandma-phone/tree/master/client), [relay server](https://github.com/paufabregat/grandma-phone/tree/master/relay-server), and [assistant](https://github.com/paufabregat/grandma-phone/tree/master/assistant) folder to know how to setup the project. The recommended order is to start by the assistant, followed by the server and finish with the client.  

## Road Map
- Tests core functionalities
- TV remote control navigation
- Back-end:
  - Authentication
  - WebRTC Peer Connection
  - Signaling
- Receive call
- Handle errors and problematic interactions

## License
MIT
