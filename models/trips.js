const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class trips extends Model {}

trips.init(
    {
        //
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',
      }
    
)
module.exports = Trips;