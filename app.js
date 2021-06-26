
require('dotenv').config()
const express =require('express');
const mongoose= require('mongoose')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const dotenv =require('dotenv');
const path=require('path')
const app=express();
const port = process.env.PORT ||3000
const routes = require('./routes/LoginRoutes')
require('./models/RegisterModel')



// Routes here 
app.use(routes)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json())
// json to show data flow to databse 
app.use(express.urlencoded({extended:false}));




// template view engine here 
app.set('view engine','ejs')
app.set('views', './views')

// All css image js path here 
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static('public'));






// database connection here

mongoose.connect("mongodb://localhost/demo4",{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:true,
    useCreateIndex:true,
}).then(()=>{
    console.log('database connected succesfully');
}).catch((err)=>{
    console.log(err);
})

// Models here for database 
const login= require('./models/RegisterModel');
const register = require('./models/RegisterModel');
// const { json } = require('express');



app.post("/register", async(req,res)=>{
    try {
        // res.send(req.body);
        const userData= new register(req.body);
        await userData.save();
        
        res.sendStatus(201).render("index");
    } catch (error) {
        res.status(500).send(error);
        
    }
})







app.listen(port,(err)=>{
    console.log(`server running at ${port}`);
    console.log(err);
})
