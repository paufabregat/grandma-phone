# Grandma Phone
Demo app to enable voice-assisted video calls for seniors.

## Motivation
Technology has brought groundbreaking changes in the way human communicate. It is amazing that we can see friends and relatives from all over the world without leaving our living room, just by getting into our phones or laptops and setting a video-call. Allowing us to strengthen relationships even if people are physically far from each other.

Technology is great but many times is not suiting everybody's needs and knowledge and makes things difficult to navigate interfaces and devices. This is especially true for many seniors and people with disabilities. The former has not caught up with the rapid tech changes and the later need products and services designed to tackle the way they best interact with the environment.

Grandma phone is born from the need to communicate via video-call with non-tech-savvy seniors. I believe we can make technology more accessible to everybody if we take a user-centric design to deliver the best experience possible.

## Infrastructure
Currently, the app is a POC to proof voice assisted communication with a web app interface suited for senior needs. A real setup consists of RaspberryPi running an Electron app and streaming the interface in a regular TV. The user interacts with the app using voice commands.

Briefly there are main 3 components:
- **Client**: User interface suited for senior needs. It is very visual and simple. Enables the user to pick a contact to call and set video and audio stream.
- **Server**:  Helper server to allow websocket communication in between the voice assistant and the web app.
- **Assistant**: Voice assistant created thanks to the awesome [SNIPS](http://snips.ai/) tech. The assistant receives commands that in turn are used by the web app to trigger actions and also receives commands to communicate with the user using Text-To-Speech (TTS)

## Setup
Please, take a look at the [client](), [server](), and [assistant]() folder to know how to setup the project. The recommended order is to start by the assistant, followed by the server and finish with the client.  

## Road Map
- TV remote control navigation
- Back-end:
  - Authentication
  - WebRTC Peer Connection
  - Signaling
- Receive call
- Handle errors and problematic interactions
