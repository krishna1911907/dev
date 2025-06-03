const libExpress = require("express")
const cors = require("cors")
const server = libExpress()
server.use(cors())
server.use(libExpress.json())
const { MongoClient } = require("mongodb")
const connection = new MongoClient("mongodb://krishna:krishna19@localhost:27017/IMS?authSource=IMS")

server.post("/users", async (req, res) => {
    console.log("user request")
    if (req.body.name && req.body.email && req.body.password && req.body.phone) {
        await connection.connect()
        const db = await connection.db("IMS")
        const collection = await db.collection("USERS")
        const result = await collection.find({ "email": req.body.email }).toArray()

        if (result.length > 0) {
            res.json("User Already Exist!")


        } else {
            await collection.insertOne({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone
            })
            res.json("USER CREATED SUCCESSFULLY!")

        }
    }
})

server.listen(8000, () => {
    console.log("server is ready on 8000")
})