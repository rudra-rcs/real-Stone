const express=require("express");
const path = require("path");
require ("./db/conn");
const User = require("./models/usermessage");
const hbs=require("hbs");
const app=express();
const port= process.env.PORT    ||  5000;

// console.log(path.join(__dirname,"../public"));
const staticpath = path.join(__dirname,"../public");
const templatepath = path.join(__dirname,"../templates/views");
const partialspath = path.join(__dirname,"../templates/partials");
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.use(express.urlencoded({extended:false}))
app.set("view engine","hbs");
app.set("views",templatepath);
app.use(express.static(staticpath));
hbs.registerPartials(partialspath);

app.get("/",(req,res)=>{

    res.render("index");
})

app.post("/contact", async (req,res)=>{

    try{

     //res.send(req.body)

      const createdata = new User(req.body);
    //   console.log("Data is not printed",req.body);
    //   console.log("MEssage",createdata);
      await createdata.save();
      res.status(201).render("index");

    }catch(error){
        res.status(500).send(error);
    }

})
app.listen(port,()=>{

    console.log(`server is running at ${port}`);
})