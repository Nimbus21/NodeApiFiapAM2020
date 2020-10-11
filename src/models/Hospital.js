const { Model, DataTypes } = require('sequelize');

class Hospital extends Model {
	static init(sequelize) {
		super.init({
			codigo: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
				field: 'cd_hospital_clinica'
			},
			cnpj: {
				type: DataTypes.INTEGER,
				allowNull: false,
				field: 'nr_cnpj'
			},
			telefone: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'nr_telefone'
			}
		}, {
			sequelize,
			modelName: 'tb_hospital_clinica'
		})
	}
}
/*
await Hospital.sync();
console.log("Eto...");
*/
module.exports = Hospital;