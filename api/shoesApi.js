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
        res.json({status: "success",
                         shoes: allShoes 

      });   

    }catch(err){ 
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
            res.json({status: "success",
           shoes: allShoes
            });
            
          
      }catch(err){
             res.json({ status: "error",
                            error:  err.stack
          });
      }

}

async function deleteSold(req,res){



try{
const {id}=req.body;
await query.deleteSold(id);
res.json({status:"success"
});

}catch(err){
    res.json({ status: "error",
                            error:  err.stack
          });
}

}



async function addShoes(req,res,next){

	



	      try{

		      
	
		    const {color,brand, price, size, in_stock,image}=req.body;
	       
                   let result= await query.addShoes(color,brand,price,size,in_stock,image);
		              
			      res.json({status:"success",
                                     message:result 
                               });
		      
    


             }catch(err){
                         
                   res.json({ status: "error",
                  error:  err.stack
                    });
             }
 }


 
 async function createCart(req,res){

    let username=req.query.username? req.query.username:'';

    try{

        
    let cart_code=await query.getCartCode(username);

    if(!cart_code){
   await query.createCart(username);
   cart_code=await query.getCartCode(username);
    }


    res.json({cart_code});

    }catch(err){
        res.json({ status: "error",
        error:  err.stack
});
    }
 }


 async function clearCart(){

    await query.clearCart();
 }
 
 async function addToCart(req,res){

    const {cart_code,shoesId}= req.body;

    console.log(shoesId);
try{

    let result=[];
    let item= await query.getItem(shoesId);

    if(item.length<1){


    result= await query.addToCart(cart_code,shoesId);

    }

    else{
        
        result=await query.updateCart(shoesId);
    }

   res.json({status:"success",
   items:result});


}catch(err){

    res.json({status:"error",
    error:err.stack,
    message:result});

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
getSizeColor,
createCart,
addToCart,
clearCart

}

}
