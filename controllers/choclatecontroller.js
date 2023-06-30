

const Choclate=require('../models/sequelize');

exports.getChoclate= async(req,res,next)=>{
   try {
     const data=await Choclate.findAll();
     res.status(200).json({allChoclate:data})
     console.log(data);
  
   } catch (error) {
    res.status(400).json({error})
    console.log(error);
    console.log(JSON.stringify(error))
   }
}




exports.postChoclate=async(req,res,next)=>{

console.log('comes');
  try {

    console.log('reaches try block');
    const itemname=req.body.itemname;
    const description=req.body.description;
    const price = req.body.price;
    const quantity=req.body.quantity;
    console.log(itemname,description,price,quantity);
    const data=await Choclate.create({
      itemname:itemname,
      description:description,
      price:price,
      quantity:quantity

    });
    res.status(202).json({newChoclate:data});
    console.log('data');
    console.log('updated successfully');
   

  } catch (error) {
    res.status(402).json({error})
    console.log(JSON.stringify(error));
    
  }
}


exports.deleteChoclate=async(req,res,next)=>{
  try {
    const userId=req.params.id;
    console.log(userId);
    await Choclate.destroy({where:{id:userId}});
  res.sendStatus(500);
  console.log(`Successfully delete the choclate where id is ${userId}`);

  } catch (error) {
res.status(501).json({error});
console.log(JSON.stringify(error));
  }
}

exports.patchbuythreeChoclate=async(req,res,next)=>{
  const userId=req.params.id3;
  const quan=req.params.quantity3-3;
  try {
    await Choclate.update({quantity:quan},{where:{id:userId}})
    res.sendStatus(207);
    console.log('patch three success');
  } catch (error) {
    res.status(507).json({error});
    console.log(JSON.stringify(error));
  }

}

exports.patchbuytwoChoclate=async(req,res,next)=>{
  const userId=req.params.id2;
  const quan=req.params.quantity2-2;
  try {
    await Choclate.update({quantity:quan},{where:{id:userId}})
    res.sendStatus(206);
    console.log('patch two success');
  } catch (error) {
    res.status(506).json({error});
    console.log(JSON.stringify(error));
  }

}
exports.patchbuyoneChoclate=async(req,res,next)=>{
  const userId=req.params.id1;
  const quan=req.params.quantity1-1;
  try {
    await Choclate.update({quantity:quan},{where:{id:userId}})
    res.sendStatus(205);
    console.log('patch one success');
  } catch (error) {
    res.status(505).json({error});
    console.log(JSON.stringify(error));
  }

}






