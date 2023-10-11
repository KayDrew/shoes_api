export default function dbQueries(db){



async function  addShoes(id,color,brand,price,size,in_stock){

    try{

                await db.none("INSERT INTO shoes (id,color,brand,price,size,in_stock) VALUES ($1,$2,$3,$4,$5,$6)",[id,color,brand,price,size,in_stock]);

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


async function  getBrand(brand){

    try{
            let shoes=await db.manyOrNone("SELECT * FROM shoes WHERE brand=$1",brand);
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
	deleteSold


}

}
