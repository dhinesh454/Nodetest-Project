const Sequelize=require('sequelize');
  

const sequelize=require('../utils/database');



const Choclate=sequelize.define('choclate',{
    id:
    {
        type:Sequelize.INTEGER,
        allowNull:false,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    },
itemname:
{
    type:Sequelize.STRING,
    allowNull:false,
    unique:true
},
description:
{
    type:Sequelize.STRING,
    alloNull:false
},
price:
{
    type:Sequelize.INTEGER,
    allowNull:false
},
quantity:
{
    type:Sequelize.INTEGER,
    alloNull:false
}


});

module.exports=Choclate;