const libExpress=require("express")
const server=libExpress()
server.post("/users",(req,res)=>{
    console.log("received request")
    res.send("user created")
})
server.post("/players",(req,res)=>{
    console.log("received request")
    res.send("player created")
})
server.post("/team",(req,res)=>{
    console.log("received request")
    res.send("team created")
})
server.listen(8000,()=>{
    console.log("server is ready on 8000")
})