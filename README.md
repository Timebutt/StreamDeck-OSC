# Send OSC Commands with your StreamDeck

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

Configuration in the UI is straightforward and should be self-explanatory. The value property is checked by the plugin so the correct type (`integer`, `float` or `string`) is selected when sending the OSC message. Alternatively, you can configure the plugin directly by changing the `appsettings.json` file.

## appsettings.json

To configure default values, edit the configuration file `%APPDATA%\Elgato\StreamDeck\Plugins\de.nils-tijtgat.osc.sdPlugin` (Windows) or `/Users/[your_username]/Library/Application Support/com.elgato.StreamDeck/Plugins/com.nils-tijtgat.osc.sdPlugin` (MacOS):

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

# Issues or feature requests

You can submit an issue or request a feature with [GitHub issues].

# Disclaimer

I'm in no way affiliated with Elgato. I wrote this plugin out of personal interest.

<!-- Reference Links -->

[Stream Deck]: https://www.elgato.com/gaming/stream-deck/ "Elgato's Stream Deck product page"
[OpenSoundControl]: https://opensoundcontrol.stanford.edu 'OSC homepage'
[GitHub issues]: https://github.com/timebutt/streamdeck-osc/issues 'GitHub issues link'
