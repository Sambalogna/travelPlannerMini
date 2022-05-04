const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Locations extends Model {}

Locations.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        location_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        travellers_id:{
            type:DataTypes.INTEGER,
            references:{
                model:"travellers",
                key:"id"
            }
        }
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
module.exports = Locations;