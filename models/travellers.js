const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class travellers extends Model {}

travellers.init(
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
module.exports = travellers;