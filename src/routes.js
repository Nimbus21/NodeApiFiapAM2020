const express = require('express');
const HospitalController = require('./controllers/HospitalController');

const routes = express.Router();

routes.get('/', (req, res) => {
	return res.json({
		msg: "hello world!!"
	});
})

routes.post('/hospital', HospitalController.store);

module.exports = routes;