const express=require('express');
const bodyParser=require('body-parser');
const Sequelize=require('sequelize');

const cors=require('cors')
const app=express();


const sequelize=require('./utils/database');
const Choclate=require('./models/sequelize');
const routes=require('./routes/choclateroutes')



app.use(cors());
app.use(bodyParser.json());

app.use('/choclate_details',routes);










sequelize.sync()
.then((res)=>{
 

   var port =8000;
   app.listen(port,()=>{
    console.log(`successfully connected port ${8000}`);
   })
})
.catch(err=>console.log(err));


















