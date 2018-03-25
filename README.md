# Grandma Phone
Front-end app to enable voice-assisted video calls for seniors.

## Motivation
Technology has brought groundbreaking changes in the way human communicate. It is amazing that we can see friends and relatives from all over the world without leaving our living room. We get to our phones or laptops and set a video-call in a matter of seconds, allowing us to strengthen relationships even when we are physically far away from each other.

Technology is great but the access to technology, to the internet and, therefore, to knowledge, is creating a digital divide in our world. The ones having access to it have a substantial socioeconomic advantage from the ones who do not.
IT companies processes on product design and development do not take into account the limitations of elders and people with disabilities and therefore their access to those products. Consequently, the access to knowledge and connectivity is full of obstacles. How could we lower the barrier to the access to technology and increase connectivity for the aforementioned groups?

Grandma Phone tries to answer the latter question, born from the need to communicate via video-call with non-tech-savvy seniors.

You can learn more about [the reasons](https://medium.com/@paufabregat/elders-wellbeing-and-learning-by-doing-part-1-76f4019fe241) behind the development of Grandma Phone and [the design process](https://medium.com/@paufabregat/elders-wellbeing-and-learning-by-doing-part-2-f9fa7f21665b) in [Medium](https://medium.com/@paufabregat).

## Infrastructure
Currently, the app is a POC to proof voice assisted communication with a web app interface suited for senior needs. A real setup consists of Raspberry Pi running an Electron app and streaming the interface in a regular TV. The user interacts with the app using voice commands.

Briefly there are main 3 components:
- **Client**: User interface suited for senior needs. It is very visual and simple. Enables the user to pick a contact to call and set video and audio stream.
- **Relay Server**:  Relay server to allow websocket communication in between the voice assistant and the web app. It relays payloads from one end to the other.
- **Assistant**: Voice assistant created thanks to the awesome [SNIPS](http://snips.ai/) tech. The assistant receives commands that in turn are used by the web app to trigger actions and it also receives commands to communicate with the user using Text-To-Speech (TTS)

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
[GNU GPLv3](https://github.com/paufabregat/grandma-phone/blob/master/LICENSE) 
