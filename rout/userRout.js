let controler=require("../controler/userControler")
let express=require("express")
let app=express()

app.post("/api/add",controler.add_data1);


module.exports=app