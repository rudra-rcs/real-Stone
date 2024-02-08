const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/newdynamic",{

}).then(()=>{

    console.log("The Connection is successful");

}).catch((error)=>{

    console.log(error);
})