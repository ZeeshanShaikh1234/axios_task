let model=require("../model/user")
let axios=require("axios")

async function add_data(){
    let add_url=await axios.get("https://jsonplaceholder.typicode.com/posts").catch((error)=>{
        return {error}
    })

    let add=await model.add(add_url.data).catch((error)=>{return {error}})
    return add
}

module.exports={
    add_data
}