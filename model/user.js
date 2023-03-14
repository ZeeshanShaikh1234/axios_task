let {knex}=require("../config/DBconfig")


async function add(param){
    let add=await knex('axios_demo').insert(param).catch((error)=>{
        return error
    })
    return add
}


module.exports={
    add
}