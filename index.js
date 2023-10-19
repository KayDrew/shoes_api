import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import { engine } from 'express-handlebars';
import flash from 'express-flash';
import session from 'express-session';
import pkg from 'pg-promise';
import dbQueries from './database.js';
import services from './services/shoes.js';
import api from './api/shoesApi.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static('public'));
app.use(express.static('images'));
app.use(cors());

app.use(session({
  secret: "no secret",
  resave: false,
  saveInitialized: false
}));
app.use(flash());

const connectionString=process.env.URL;
const Pool= pkg();
const db=Pool ({connectionString ,
ssl: true 
});

const query= dbQueries(db);
const service= services(query);
const shoesApi= api(query);

app.get("/", service.showAll);


app.get("/api/shoes", shoesApi.getAll);
app.get("/api/shoes/brand/:brandname", shoesApi.getBrand);
app.get("/api/shoes/size/:size", shoesApi.getSize);
app.get("/api/shoes/color/:color",shoesApi.getColor);
app.get("/api/shoes/brand/:brandname/size/:size/color/:color",shoesApi.getBrandSizeColor);
app.get("/api/shoes/brand/:brandname/size/:size",shoesApi.getBrandSize);
app.get("/api/shoes/brand/:brandname/color/:color",shoesApi.getBrandColor);
app.get("/api/shoes/size/:size/color/:color",shoesApi.getSizeColor);
app.post("/api/shoes/sold/:id", shoesApi.deleteSold);
app.post("/api/shoes", shoesApi.addShoes);
app.get('/api/shoes/create',shoesApi.createCart);


const PORT= process.env.PORT||5432;

app.listen(PORT,function(){
    console.log("App starting on port "+PORT);
});
