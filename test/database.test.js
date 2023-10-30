import 'dotenv/config';
import assert from 'assert';
import dbQueries from '../database.js';
import pkg from 'pg-promise';
const connectionString = process.env.URL;
const Pool = pkg();
const db = Pool({
    connectionString,
    ssl: true
});

let queries= dbQueries(db);


describe('The Shoes Catalogue web app',async function(){
		
beforeEach(async function () {
	
    try {
        	
       await queries.resetAll();
           }catch(err){

         console.log(err);
}
        
}  );

  it("should return all the shoes in the stock",async function(){

let shoes= await queries.getAll();
assert.equal(36,shoes.length);
});
  
  
    it("should return all the shoes of a selected color",async function(){
    	
let blueShoes= await queries.getColor("Blue");
assert.equal(13, blueShoes.length);
});
  

it("should return all the shoes of a selected brand",async function(){
    	
    let shoes= await queries.getBrand("Litez");
    assert.equal(7, shoes.length);
    });  
    
    
    it("should return all the shoes of a selected size",async function(){
    	
        let shoes= await queries.getSize(7);
        assert.equal(4, shoes.length);
        });
  
        it("should return all the shoes of a selected brand and color",async function(){
    	
            let shoes= await queries.getBrandColor("Litez","Green");
            assert.equal(3, shoes.length);
            });  
            

    it("should be able to claer all items ",async function(){

let deleted= await queries.resetAll();
assert.equal("Successfully deleted!", deleted);
});


it("should return the admin password",async function(){
    	
    let pass= await queries.getOwner("Admin");
    assert.equal("Admin@2023", pass);
    });
  
      
        after(function () {
        db.$pool.end;
    });
    
    
    
   

}  );