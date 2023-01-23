// Controller
const {welcomeHomeController} = require('../controllers/HomeControllers');


// Routes
module.exports = function HomeRoutes(app, options, done){
	app.get('/', {handler: welcomeHomeController});

	done();
}