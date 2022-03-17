const socket = io.connect('http://localhost:8080');
const stream = ss.createStream();

let forzaData;
const boost = document.getElementById('boost');
const hp = document.getElementById('hp');

socket.on('data', (data) => {
	boost.innerText = 'Boost: ' + (data.boost / 14.5065746809).toFixed(2);
	hp.innerText = 'HP: ' + (data.power * 0.00134102).toFixed();
	// boost.innerText = 'Boost: ' + data.boost;
});
