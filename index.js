const server = require('./server.js');

server.listen(port, () => {
	console.log(`This server is over ${port}`);
});
