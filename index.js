let rout=require("./mainRout")



// let axios=require("axios")
let express=require("express")
let app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',rout)

app.listen(3006,(()=>{
    console.log("connected")
}))
// axios.get("https://jsonplaceholder.typicode.com/posts")
//   .then((response) =>{
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })

// axios.post("https://jsonplaceholder.typicode.com/posts",{
//     userId: 11
// }).then((response)=>{
//     console.log(response.data)
// }).catch((error)=>{
//     console.log(error)
// })