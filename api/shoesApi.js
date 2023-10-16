export default function  shoesApi(query){

let allShoes=[];


async function getAll(req,res){


  try{

           allShoes= await query.getAll();
           res.json({status: "success",
           shoes: allShoes
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
           shoes: allShoes
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
           shoes: allShoes
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
                             shoes: allShoes 

          });
            
          
      }catch(err){
	    
	    res.json({ status: "error",
                            error:  err.stack
          });
      }

}


async function getBrandSizeColor(req,res){

    let size= req.params.size;
    let brand= req.params.brandname;
    let color=req.params.color;

    try{
    	
            allShoes= await query.getBrandSizeColor(brand,size,color);
            
            res.json({status: "success",
                             shoes: allShoes 

          });
            
          
      }catch(err){
             res.json({ status: "error",
                            error:  err.stack
          });
      }

}

async function getBrandColor(req,res){

   
    let brand= req.params.brandname;
    let color=req.params.color;

    try{
    	
            allShoes= await query.getBrandColor(brand,color);
      
            res.json({status: "success",
                             shoes: allShoes 

          });
            
          
      }catch(err){
             res.json({ status: "error",
                            error:  err.stack
          });
      }

}

async function getColor(req,res){

    let color=req.params.color;

    try{

        allShoes= await query.getColor(color);
        res.header("Access-Control-Allow-Origin", "*");
        res.json({status: "success",
                         shoes: allShoes 

      });   

    }catch(err){
	  res.header("Access-Control-Allow-Origin", "*");  
        res.json({ status: "error",
        error:  err.stack
});
    }
}



async function getSizeColor(req,res){

    let size= req.params.size;
    let color=req.params.color;
    try{
    	
            allShoes= await query.getSizeColor(size,color);
            res.header("Access-Control-Allow-Origin", "*");
            res.json({status: "success",
           shoes: allShoes
            });
            
          
      }catch(err){
	    res.header("Access-Control-Allow-Origin", "*");
             res.json({ status: "error",
                            error:  err.stack
          });
      }

}

async function deleteSold(req,res){



try{
const {id}=req.body;
await query.deleteSold(id);
res.header("Access-Control-Allow-Origin", "*");
res.json({status:"success"
});

}catch(err){
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods","*");
    res.json({ status: "error",
                            error:  err.stack
          });
}

}



async function addShoes(req,res){

       const {color,brand, price, size, in_stock,image}=req.body;
	       
	      try{
	
            await addShoes(id,color,brand,price,size,in_stock,image);
            res.header("Access-Control-Allow-Origin", "*");
	    res.header("Access-Control-Allow-Methods","*");  
	    res.header("Access-Control-Allow-Headers","*");
			      res.json({status:"success"
});

    }catch(err){
                         
	   res.header("Access-Control-Allow-Origin", "*");
	 res.header("Access-Control-Allow-Methods","*");
	 res.header("Access-Control-Allow-Headers","*");
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
addShoes,
getColor,
getBrandColor,
getBrandSizeColor,
getSizeColor

}

}
