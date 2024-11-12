import streamdeck, { action, KeyDownEvent, SingletonAction } from '@elgato/streamdeck';
// @ts-ignore
import osc from 'osc';

// Initialize the UDP port for OSC
const udpPort = new osc.UDPPort({
    localAddress: '127.0.0.1',
    localPort: 9003,
    metadata: true,
});

udpPort.on('ready', function () {
    streamdeck.logger.info('UPD port ready!');
});

udpPort.on('error', function (err: unknown) {
    streamdeck.logger.info('An error occurred');
    streamdeck.logger.info(err);
});

udpPort.open();

@action({ UUID: 'com.nils-tijtgat.osc.send-osc-command' })
export class SendOSCCommand extends SingletonAction<SendOSCCommandSettings> {
    /**
     * Listens for the {@link SingletonAction.onKeyDown} event which is emitted by Stream Deck when an action is pressed. Stream Deck provides various events for tracking interaction
     * with devices including key down/up, dial rotations, and device connectivity, etc. When triggered, {@link event} object contains information about the event including any payloads
     * and action information where applicable.
     */
    override async onKeyDown(event: KeyDownEvent<SendOSCCommandSettings>) {
        const { settings } = event.payload;

        streamdeck.logger.info(settings);

        udpPort.send(
            {
                address: settings.command,
                args: typeof settings.value === 'string' ? [{ type: 's', value: settings.value }] : [{ type: 'i', value: settings.value }],
            },
            settings.ipAddress,
            settings.port,
        );
    }
}

/**
 * Settings for {@link SendOSCCommand}.
 */
type SendOSCCommandSettings = {
    ipAddress: string;
    port: number;
    command: string;
    value: string | number;
};
