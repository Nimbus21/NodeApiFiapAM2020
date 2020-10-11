const { Model, DataTypes } = require('sequelize');

class Hospital extends Model {
	static init(sequelize) {
		super.init({
			name: DataTypes.STRING,
			age: DataTypes.INTEGER
		}, {
			sequelize
		})
	}
}

module.exports = Hospital;