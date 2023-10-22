export default function dbQueries(db){


        async function createCart(username){

                try{
   
                   await db.none("INSERT INTO cart(cart_code,status,username) VALUES(DEFAULT,$1,$2)",['open',username]);

   
                }  catch(err){
                   console.log(err);
                } 
           }


           async function getCartCode(username){

        try{

          let result= await db.oneOrNone("SELECT cart_code FROM cart WHERE username=$1",username);
         
          return result.cart_code;
        }catch(err){
                console.log(err);
        }
           }

           async function addToCart(cart_code,shoesId,qty){
          
                try{
                      await db.none("INSERT INTO cart_items(cart_code,id,qty) VALUES($1,$2,$3)",[cart_code,shoesId,qty]);

                      let result= await db.manyOrNone("SELECT shoes.brand, shoes.color,shoes.price,shoes.image,cart_items.qty FROM cart_items JOIN shoes on cart_items.id=shoes.id WHERE cart_code=$1",cart_code);
        
                        return result;
        
                }catch(err){
        
                        console.log(err);
                        return err;
                }
                  }

           async function allCarts(){

                try{
                  let result= await db.manyOrNone("SELECT * FROM cart");
                  
                  return result;
                }catch(err){
                        console.log(err);
                }
                   }


async function  addShoes(color,brand,price,size,in_stock,image){

    try{

                await db.none("INSERT INTO shoes (id,color,brand,price,size,in_stock,image) VALUES (DEFAULT,$1,$2,$3,$4,$5,$6)",[color,brand,price,size,in_stock,image]);

                
	    return "Successfully  added new stock";
         }catch(err){
	
                 console.log(err);
	    return "Could not add stock";

      }
}


async function  getAll(){

    try{
            let shoes=await db.manyOrNone("SELECT * FROM shoes");
            return shoes;
    }catch(err){
    	
           console.log(err);
   }
}


async function  getBrand(brand){

    try{
            let shoes=await db.manyOrNone("SELECT * FROM shoes WHERE brand=$1",brand);
            return shoes;
          
    }catch(err){
    	
           console.log(err);
   }
}


async function  getBrandColor(brand,color){

    try{
            let shoes=await db.manyOrNone("SELECT * FROM shoes WHERE brand=$1 AND color=$2",[brand,color]);
            return shoes;
          
    }catch(err){
    	
           console.log(err);
   }
}


async function  getSize(size){

    try{
            let shoes=await db.manyOrNone("SELECT * FROM shoes WHERE size=$1",size);
            return shoes;
          
    }catch(err){
    	
           console.log(err);
   }
}

async function  getBrandSize(brand,size){

  try{
             let shoes= await db.manyOrNone("SELECT * FROM shoes WHERE brand=$1 AND size=$2",[brand,size]);
             return shoes;
  
  }catch(err){

           console.log(err);
}

}


async function  getBrandSizeColor(brand,size,color){

        try{
                   let shoes= await db.manyOrNone("SELECT * FROM shoes WHERE brand=$1 AND size=$2 AND color=$3",[brand,size,color]);
                   return shoes;
        
        }catch(err){
      
                 console.log(err);
      }
      
      }


async function  getSizeColor(size,color){

        try{
                let shoes=await db.manyOrNone("SELECT * FROM shoes WHERE size=$1 AND color=$2",[size,color]);
                return shoes;
              
        }catch(err){
                
               console.log(err);
       }
    }


async function getColor(color){
        try{
                let shoes=await db.manyOrNone("SELECT * FROM shoes WHERE color=$1",color);
                return shoes;
              
        }catch(err){
                
               console.log(err);
       }
}



async function deleteSold(id){

try{

await db.none("DELETE FROM shoes WHERE id=$1",id);
console.log("deleted");
}catch(err){

console.log(err);
}
}

async function clearCart(){
        try{

                await db.none("DELETE FROM cart_items");
                console.log("deleted");
                }catch(err){
                
                console.log(err);
                }      
}

return{
	addShoes,
	getAll,
	getBrand,
	getSize,
	getBrandSize,
	deleteSold,
        getColor,
        getBrandColor,
        getSizeColor,
        getBrandSizeColor,
        createCart,
        getCartCode,
        allCarts,
        addToCart,
        clearCart


}

}
