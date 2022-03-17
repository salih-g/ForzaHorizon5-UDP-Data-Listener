import fs from 'fs';

const socket = io.connect('http://localhost:8080');
const stream = ss.createStream();

const boost = document.getElementById('boost');

ss(socket).emit('data', stream);
const test = fs.createReadStream(filename).pipe(stream);

console.log(test);

// socket.on('data', (data) => {
// 	console.log(data);
// });
