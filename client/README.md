# Grandma Phone Client
Here you will find the main interface of the web app. There are currently three views: contact list, calling contact and call. The web app handles incoming events from the websocket server and also emits events using sockets.   

The app already provides a set of predefined users that work well with the trained voice-assistant. In the future, this will be replaced so every user has his/her own contacts.

## Run the app
The first thing you will need to do is to clone the repository and navigate to the client folder.

~~~
git clone https://github.com/paufabregat/grandma-phone
cd grandma-phone/client
~~~

You will need the node version >= 6 to run the app. Next, install all the dependencies
~~~
npm install
~~~

Run the app and see it popping at `localhost:3000` and in the electron environment
~~~
npm start
~~~

As both the react app and the electron app run in parallel, you may encounter that TTS messages are being duplicated as both apps are publishing to the same queue. If you are developing and testing the functionality you may want to just run the react app like so:
~~~
npm run react-start
~~~

## Config file
Right now the config file enables developers to use a different voice-assistant instead of the one provided in the repository. The developer would create a new assistant using the [SNIPS console](https://console.snips.ai) and replace the personal intent names set in the config file by the ones he/she created.
This is interesting if you want to create an assistant that is trained with more and/or different names and create different sentences to trigger the action and/or trigger it in a different language rather than English.
To be clear, let's see an example: let's say you created an assistant and you created an intent for the `callContact` action called `robert:callVIPContacts`. It would look like inside the intents object in the config file:

~~~javascript
callContact: 'robert:callVIPContact',
~~~

## Electron
[Electron](https://electronjs.org/) enables developers to create cross-platform desktop apps using HTML, CSS and JS.

The app in this repo is intended to run in a Raspberry Pi with a Raspbian distribution as an Electron app. [This bootstrap project](https://github.com/csepulv/electron-with-create-react-app) was used to enable working side by side with create-react-app and Electron without the need to eject the react app. If you want to learn more about it, please follow [this link](https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c)
