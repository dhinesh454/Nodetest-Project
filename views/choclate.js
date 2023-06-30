async function saveDetails(event)
{
try {
    event.preventDefault();

const itemname=document.getElementById('itemid').value;
const description=document.getElementById('descid').value;
const price=document.getElementById('priceid').value;
const quantity=document.getElementById('quantityid').value;

 console.log((itemname,description,price,quantity));

 const choco={itemname:itemname,description:description,price:price,quantity:quantity}

    const res=await axios.post('http://localhost:8000/choclate_details/add-details',choco);
    console.log(res.data.newChoclate);
    showOnScreen(res.data.newChoclate)
    
} catch (error) {
    document.body.innerHTML+='<h4>Something Went Wrong</h4>'
    console.log(error);
    
}
}

window.addEventListener('DOMContentLoaded',async ()=>{

 try {
       const res=await axios.get('http://localhost:8000/choclate_details/get-details');
   
       console.log(res.data);
       for(let key of res.data.allChoclate)
       {
           console.log(key);
           showOnScreen(key)
       }
 } catch (error) {
    document.body.innerHTML+='<h4>Something Went Wrong</h4>'
    console.log(error);
 }

})   
 function showOnScreen(choco)
 {
    let parentNode=document.getElementById('listofitem')

    let childNode=`<li id="${choco.id}">${choco.itemname}--${choco.description}--${choco.price}--${choco.quantity}
    <button class="btn btn-warning" onclick=buyOne('${choco.id}','${choco.itemname}','${choco.description}','${choco.price}','${choco.quantity}')>Buyone</button>
    <button class="btn btn-danger" onclick=buyTwo('${choco.id}','${choco.itemname}','${choco.description}','${choco.price}','${choco.quantity}')>Buytwo</button>
     <button class="btn btn-info" onclick=buyThree('${choco.id}','${choco.itemname}','${choco.description}','${choco.price}','${choco.quantity}')>Buythree</button></li>`

parentNode.innerHTML=parentNode.innerHTML+childNode;

 }



async function buyOne(id,itemname,description,price,quantity)
{
  let quan=quantity-1;


  if(quan>0)
  {

   try {
     await axios.patch(`http://localhost:8000/choclate_details/buyone/${id}/${quantity}`,{
    "quantity":quan
     })
     console.log(('buy one updated'));
     removeUserFromScreen(id);
      showPatchOnscreen(id,itemname,description,price,quan);
    
      
   

  
   } catch (error) {
    document.body.innerHTML= document.body.innerHTML+"<h4>Something Went Wrong</h4>"
    console.log(error)
   }


  }


  else
  {
    deleteUser(id);
  }


}


async function buyTwo(id,itemname,description,price,quantity)
{
  let quan=quantity-2;


  if(quan>0)
  {

   try {
     await axios.patch(`http://localhost:8000/choclate_details/buytwo/${id}/${quantity}`,{
    "quantity":quan
     })
     console.log(('buy one updated'));
     removeUserFromScreen(id);
      showPatchOnscreen(id,itemname,description,price,quan);
    
      
   

  
   } catch (error) {
    document.body.innerHTML= document.body.innerHTML+"<h4>Something Went Wrong</h4>"
    console.log(error)
   }


  }


  else
  {
    deleteUser(id);
  }

}





async function buyThree(id,itemname,description,price,quantity)
{
  let quan=quantity-3;


  if(quan>0)
  {

   try {
     await axios.patch(`http://localhost:8000/choclate_details/buythree/${id}/${quantity}`,{
    "quantity":quan
     })
     console.log(('buy one updated'));
     removeUserFromScreen(id);
      showPatchOnscreen(id,itemname,description,price,quan);
    
      
   

  
   } catch (error) {
    document.body.innerHTML= document.body.innerHTML+"<h4>Something Went Wrong</h4>"
    console.log(error)
   }


  }


  else
  {
    deleteUser(id);
  }

}





function showPatchOnscreen(id,itemname,description,price,quan)
{
    let parentNode=document.getElementById('listofitem')

    let childNode=`<li id="${id}">${itemname}--${description}--${price}--${quan}
    <button class="btn btn-warning" onclick=buyOne('${id}','${itemname}','${description}','${price}','${quan}')>Buyone</button>
    <button class="btn btn-danger" onclick=buyTwo('${id}','${itemname}','${description}','${price}','${quan}')>Buytwo</button>
     <button class="btn btn-info" onclick=buyThree('${id}','${itemname}','${description}','${price}','${quan}')>Buythree</button></li>`

parentNode.innerHTML=childNode+parentNode.innerHTML
}


async function deleteUser(id)
{
    try {
        await axios.delete(`http://localhost:8000/choclate_details/delete-details/${id}`)

        removeUserFromScreen(id);
        
    } catch (error) {
        document.body.innerHTML= document.body.innerHTML+"<h4>Something Went Wrong</h4>"
        console.log(error)
    }
}


function removeUserFromScreen(id)
{
    let parentNode=document.getElementById('listofitem');

    let childNode=document.getElementById(id);

    parentNode.removeChild(childNode);
}



  
