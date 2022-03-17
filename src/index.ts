import dgram from 'dgram'
import Parser from './Parser'
const socket = dgram.createSocket('udp4');

const PORT = 5300;

const parser = new Parser('ForzaHorizon5');

socket.on('message', (msg: Buffer) => {
	const data = parser.toTelemetryRow(msg);
	console.log(`boost: ${data.boost.toFixed()}`);
});

socket.bind(PORT);