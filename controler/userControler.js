let service=require("../service/user")


async function add_data1(request,response){
    let add= await service.add_data(request.body).catch((error)=>{
        return error
    })
    console.log(add)
    return response.send(add)
}


module.exports = {
    add_data1
}