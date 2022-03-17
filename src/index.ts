import dgram from 'dgram';
import express from 'express';
import path from 'path';
import fs from 'fs';
import Parser from './Parser';

const FORZAPORT = 5300;
const PORT = 8080;
const publicPath = path.join(__dirname, '/public');

const udp = dgram.createSocket('udp4');
const app = express();
const server = app.listen(PORT);
const parser = new Parser('ForzaHorizon5');
const io = require('socket.io')(server);
const ss = require('socket.io-stream');
let forzaData: any;

app.use(express.static(publicPath));

udp.on('message', (msg: Buffer) => {
	forzaData = parser.toTelemetryRow(msg);
});

io.on('connection', (socket: any) => {
	console.log(socket.id);
	ss(socket).on('data', (stream: any) => {
		stream.pipe(fs.createWriteStream(forzaData));
	});
});

udp.bind(FORZAPORT);
server.on('listening', () => {
	console.log('Server on listening...');
});
