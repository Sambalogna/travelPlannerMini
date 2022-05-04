const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class locations extends Model {}

locations.init(
    {
        // sql columns
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',
      }
    

)
module.exports = locations;