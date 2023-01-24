require('dotenv').config();

const fastify = require('fastify');

const app = fastify({logger: true});

app.register(require('./src/routes/HomeRoutes'), {prefix: '/'});

function start(){
	try {
		app.listen({port: process.env.SERVER_PORT, host: process.env.SERVER_HOST})
			.then((address) => {
				console.log(`Server listening on ${address}`);
			});
	} catch (error){
		console.error(error);
		process.exit(1);
	}
}

start();