export default function allShoes(db){


    async function getAll(req,res){


        try{
            let shoes=await db.manyOrNone("SELECT * FROM shoes");

            res.json({
                shoes:shoes
            });
    }catch(err){
    	
        res.json({
            shoes:err
        });
   }
}
    


async function getItem(cart_code){


    try{
        let shoes=await db.manyOrNone("SELECT * FROM cart_items WHERE cart_code=$1",cart_code);

      return shoes;
}catch(err){
  
    return err;
}

}

async function addToCart(req,res){

    
    try{
}catch(err){
  
    return err;
}

}


    return{

        getAll,
        getItem
    }
}