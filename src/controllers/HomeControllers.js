// Utils
const errorHandler = require('../utils/errorHandler');


// Controllers
async function welcomeHomeController(request, reply){
	try{
		return reply
			.code(200)
			.send({
				status: 200,
				message: 'Hello World from API !'
			});
	} catch (error){
		errorHandler(reply, 500, error);
	}
}