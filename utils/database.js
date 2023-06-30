const Sequelize=require('sequelize');

const sequelize=new Sequelize('node-complete','root','Dhina@454',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;