require('dotenv').config();

const fastify = require('fastify');

const app = fastify();

function start(){
	try {
		app.listen({port: process.env.SERVER_PORT})
			.then((address) => {
				console.log(`Server listening on ${address}`);
			});
	} catch (error){
		console.error(error);
		process.exit(1);
	}
}

start();