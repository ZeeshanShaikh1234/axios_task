const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host:"localhost" ,
        port: 3306,
        user: "root",
        password: "zeeshan#123",
        database : "node_demo"
    },
    useNullAsDefault: true
});
 
knex.raw("select 1").then(()=>{
    console.log("connected to database")
}).catch(()=>{
    console.log("not conect to database")
})

module.exports={
    knex
}