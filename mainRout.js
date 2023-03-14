let rout=require("./rout/userRout")

let express=require("express")
let app=express()

app.use("/",rout)

module.exports = app