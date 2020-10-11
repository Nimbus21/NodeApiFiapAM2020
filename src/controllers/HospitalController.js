const Hospital = require('../models/Hospital');

module.exports = {
	async store(req, res) {
		const { cnpj, telefone } = req.body;

		const hospital = await Hospital.create({
			cnpj,
			telefone
		})

		return res.json(hospital);
	}
};

//Vamos descobrir quem tá mandando o nome da tabela hehe
//Não é o const hospital = await Hospital.create
//Nem o const Hospital = require
//Pelo menos nao eles separados...