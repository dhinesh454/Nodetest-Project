const express=require('express');

const  routes=express.Router();

const  choclateController=require('../controllers/choclatecontroller');

routes.get('/get-details',choclateController.getChoclate);
routes.post('/add-details',choclateController.postChoclate);
routes.delete('/delete-details/:id',choclateController.deleteChoclate);
routes.patch('/buythree/:id3/:quantity3',choclateController.patchbuythreeChoclate);

routes.patch('/buytwo/:id2/:quantity2',choclateController.patchbuytwoChoclate);
routes.patch('/buyone/:id1/:quantity1',choclateController.patchbuyoneChoclate);






module.exports=routes;