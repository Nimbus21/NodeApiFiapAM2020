const express = require('express');
const routes = require('./routes');
const port = process.env.PORT || 3000;

require('./database/index');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(port, () => {
	console.log("Servidor ouvindo na porta: " + port);
});