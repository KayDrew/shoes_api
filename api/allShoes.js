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
    


    return{

        getAll
    }
}