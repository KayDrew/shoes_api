export default function  shoesApi(query){

let allShoes=[];


async function getAll(req,res){


  try{

           allShoes= await query.getAll();
           res.json({status: "success",
           data: allShoes
            });
           

   }catch(err){
   	
          res.json({ status: "error",
                            error:  err.stack
          });

   }

}

async function getBrand(req,res){

    let brand= req.params.brandname;
    try{
    	
            allShoes= await query.getBrand(brand);
            res.json({status: "success",
           data: allShoes
            });
            
          
      }catch(err){
             
             res.json({ status: "error",
                            error:  err.stack
          });
             
          
      }

}

async function getSize(req,res){

    let size= req.params.size;
    try{
    	
            allShoes= await query.getSize(size);
            res.json({status: "success",
           data: allShoes
            });
            
          
      }catch(err){
             res.json({ status: "error",
                            error:  err.stack
          });
      }

}

async function getBrandSize(req,res){

    let size= req.params.size;
    let brand= req.params.brandname;

    try{
    	
            allShoes= await query.getBrandSize(brand,size);
            res.json({status: "success",
                             data: allShoes 

          });
            
          
      }catch(err){
             res.json({ status: "error",
                            error:  err.stack
          });
      }

}

async function deleteSold(req,res){

let id=req.params.id;

try{
	
await query.deleteSold(id);
res.json({status:"success"
});

}catch(err){

    res.json({ status: "error",
                            error:  err.stack
          });
}

}


async function addShoes(req,res){

       let id=0;
       let color="";
       let brand="";
       let price=0;
       let size=0;
       let in_stock=0;

   try{
	
            await addShoes(id,color,brand,price,size,in_stock)

    }catch(err){
                         res.json({ status: "error",
                            error:  err.stack
          });
    }
 }

return{

getAll,
getBrand,
getSize,
getBrandSize,
deleteSold,
addShoes

}

}
