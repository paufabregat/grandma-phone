# Assistant
The SNIPS voice-assistant enables the user to speak out commands which are processed and understood. Moreover, it also handles incoming text which is in turn voice out to the user, creating a dialogue in between user and app.

Currently, there are 2 voice-assistant commands handled by the app:
### Call contact
Call to a specific contact from the contact list. Get a response if calling to contact or if the user is trying to call a non-existent contact in the contact list.

**Slots**
contactName: Name of the person who to contact or alternatively the family relation you have with that person e.g. Sasha - grandson, Michael - son.

**Sentences**
- Call to Ghandi
- Call Kendrick
- I need to call Trump

Currently, the voice-assistant just handles calls to Trump 👶, Ghandi 🙌  and Kendrick 🎤. You can try Pau as a name which is recognized but not available in the user contact list.

### Stop call
Stop calling for a contact or stop an ongoing call.

**Sentences**
- Stop call
- Hang up

## Setup

First, you should setup your Raspberry Pi and the SNIPS platform running on it. Please, follow the instruction on the [SNIPS wiki](https://github.com/snipsco/snips-platform-documentation/wiki/1.-Setup-the-Snips-Voice-Platform) and come back here when ready for some more action! Also, once your Raspberry is running Raspbian Stretch and it is connected to your local network you can use [Sam](https://snipsco.github.io/sam/getting-started/introduction/): SNIPS CLI to manage voice assistants. It really makes your life easier to setup the SNIPS platform.

The only step that has to be done manually and where Sam could not help (or at least by the time it was tried) is deploying a custom assistant. The Grandma Phone assistant is a custom one so in order to deploy it, please follow [these instructions](https://github.com/snipsco/snips-platform-documentation/wiki/2.-Create-an-assistant-using-an-existing-bundle#step-2-download-your-assistant).

You can download the zip file of the Grandma Phone assistance [here](https://s3.eu-west-3.amazonaws.com/assitants/grandma-phone-assistant.zip).

Ok at this point everything is working smoothly, right? Now run on your terminal
~~~
sam watch
~~~

and start interacting with the voice assistance to see the logs.

## More about SNIPS
If you would like to know more about SNIPS and how the platform works, I highly recommend you to go through the [wiki](https://github.com/snipsco/snips-platform-documentation/wiki) and check the repos on the Github organization.
