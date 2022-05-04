const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Travellers extends Model {}

Travellers.init(
    {
    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false
    },
    name:{
        type: DataTypes.STRING
    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'travellers',
      }
)
module.exports = Travellers;