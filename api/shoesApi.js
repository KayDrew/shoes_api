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

async function getBrand(req,res,next){

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

async function getSize(req,res,next){

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

async function getBrandSize(req,res,next){

    let size= req.params.size;
    let brand= req.params.brand;

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



return{

getAll,
getBrand,
getSize,
getBrandSize

}

}