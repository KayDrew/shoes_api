export default function  shoesApi(query){

let allShoes=[];


async function getAll(req,res){


  try{

           allShoes= query.getAll();
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
    	
            allShoes= query.getBrand(brand);
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
    	
            allShoes= query.getSize(size);
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
    	
            allShoes= query.getBrandSize(brand,size);
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
    	
            allShoes= query.getBrandSizeColor(brand,size,color);
            
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
    	
            allShoes= query.getBrandColor(brand,color);
      
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

        allShoes= query.getColor(color);
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
    	
            allShoes= query.getSizeColor(size,color);
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
let result=query.deleteSold(id);

res.json({message:result
});

}catch(err){
    res.json({ message: result,
                            error:  err.stack
          });
}

}

async function getCartItems(req,res){



    try{
  let items=  query.getCartItems();

    res.json({status:"success",items:items

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
	       
                   let result= query.addShoes(color,brand,price,size,in_stock,image);
		              
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

        
    let cart_code=query.getCartCode(username);

    if(!cart_code){

   await query.createCart(username);
   cart_code=query.getCartCode(username);
    }


    res.json({cart_code:cart_code
    });

    }catch(err){

        res.json({ status: "error",
        error:  err.stack,
       
});
    }
 }


 async function pay(req,res){

    try{

   let result= query.pay();

   res.json({ status: "success",
   message:result
});
    }catch(err){
               res.json({ status: "error",
        error:  err.stack,
        message:result
})
    }
 }
 
 async function addToCart(req,res){

    const {cart_code,shoesId,qty}= req.body;

    
try{

    let result=[];
    let item= query.getItem(shoesId);
    
    if(item.length<1){


    result= query.addToCart(cart_code,shoesId,qty);

   }

  else{
        
        result=query.updateCart(shoesId,cart_code);
   }

   res.json({status:"success",
   items:result,
item:item});


}catch(err){

    res.json({status:"error",
    error:err.stack,
    message:result});

 }

}


async function removeItem(req,res){

    const {cart_code,shoesId}= req.body;

    try{

        let result= query.removeItem(shoesId,cart_code);  
    
       res.json({status:"success",
    items:result});
    
    
    }catch(err){
    
        res.json({status:"error",
        error:err.stack,
        message:result});
    
     }

}


async function pastOrders(req,res){

    const {shoesId,cart_code}= req.body;

    try{

        let result=  query.pastOrders(shoesId,cart_code);  
    
       res.json({status:"success",
    message:result});
    
    
    }catch(err){
    
        res.json({status:"error",
        error:err.stack,
        message:result});
    
     }

}

async function getPassword(req,res){
    let name= req.params.name;

    try{

        let result= query.getOwner(name);  
    
       res.json({status:"success",
              password:result});
    
    
    }catch(err){
    
        res.json({status:"error",
        error:err.stack,
        password:''});
    
     }
    
}


async function getOrders(req,res){

let cart_code=req.params.cart_code;

    try{

        let result= query.getOrders(cart_code);  
    
       res.json({status:"success",
     items:result,
     cart_code:cart_code});
    
    
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
pay,
getCartItems,
removeItem,
pastOrders,
getOrders,
getPassword

}

}
