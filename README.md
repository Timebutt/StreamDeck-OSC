# Send OSC Commands with your StreamDeck

## What Is This (and what does it do?)

This [Elgato Stream Deck][Stream Deck] plugin allows you to send sends low-level basic [OpenSoundControl][https://opensoundcontrol.stanford.edu] messages. Different from the other available plugins, this plugin runs on both Windows as well as MacOS.

## Installation

You can install the plugin from the [Elgato Marketplace](https://marketplace.elgato.com), or build the plugin yourself and install locally.

## Building the plugin

Building the plugin can be done using the following commands (make sure you have installed all dependencies beforehand by running `npm install`)

```
npm run build
npm run package
```

The plugin will now be available in the `dist` folder as `com.nils-tijtgat.osc.streamDeckPlugin`. Double clicking this should automatically install this in StreamDeck. The `npm run validate` command is available to validate the bundled pluging using the `streamdeck` CLI.

## Usage

### General

Enter IP and Port of your OSC device if they are different than the default values (to change the default values, see the appsettings.json section below), enter the message you want to send, for example "/hardwareInput/1/volume" which depends on the system you're using. As said, every device or software uses a different structure.
You can send string, an integer number and a float number as argument with the message, if it's needed. You can send all, some or none. Check the corresponding checkboxes to have the values send as arguments.
In OSC there are a lot more options that can be required as arguments, including multiple strings, multiple ints, big ints and blobs - in varying order. I did not implement that all.

## appsettings.json

To configure default values, edit the configuration file
%APPDATA%\Elgato\StreamDeck\Plugins\de.shells.osc.sdPlugin

```json
{
    "DefaultSettings": {
        "name": "/",
        "value": "",
        "ipAddress": "127.0.0.1",
        "port": 7001
    }
}
```

# I have an issue or miss a feature?

You can submit an issue or request a feature with [GitHub issues].

# Disclaimer

I'm in no way affiliated with Elgato. I wrote this plugin out of personal interest.

<!-- Reference Links -->

[Stream Deck]: https://www.elgato.com/gaming/stream-deck/ "Elgato's Stream Deck product page"
[OpenSoundControl]: https://opensoundcontrol.stanford.edu 'OSC homepage'
[GitHub issues]: https://github.com/timebutt/streamdeck-osc/issues 'GitHub issues link'
