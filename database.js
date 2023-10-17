export default function dbQueries(db){


        async function createCart(username){

                try{
   
                   await db.none("INSERT INTO cart(cart_code,status,username) VALUES(DEFAULT,$1,$2)",['open',username]);
   
                   console.log('insterted')
   
                }  catch(err){
                   console.log(err);
                } 
           }


           async function getCartCode(username){

        try{
          let result= await db.oneOrNone("SELECT cart_code FROM cart WHERE username=$1",username);
          console.log(result.cart_code);
          return result.cart_code;
        }catch(err){
                console.log(err);
        }
           }


           async function allCarts(){

                try{
                  let result= await db.manyOrNone("SELECT * FROM cart");
                  console.log(result);
                  return result;
                }catch(err){
                        console.log(err);
                }
                   }


async function  addShoes(id,color,brand,price,size,in_stock,image){

    try{

                await db.none("INSERT INTO shoes (id,color,brand,price,size,in_stock,image) VALUES ($1,$2,$3,$4,$5,$6)",[id,color,brand,price,size,in_stock,image]);

                console.log("successfully  inserted");
     }catch(err){
	
                 console.log(err);

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
        allCarts


}

}
