const { Travellers, Trips, Locations } = require('../../models');
const router = require('express').Router();
const sequelize = require('../../config/connection');


router.get('/',async(req,res)=>{
    try{
        const travellersData= await Travellers.findAll({
            include:[{model:Locations}, {model: Trips }],
            attributes:{
                include:[
                    [
                        sequelize.literal((`SELECT()`))
                    ]
                ]
            }

        })
    }catch(err){}
})