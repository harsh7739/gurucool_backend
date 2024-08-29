const express = require("express")
require("dotenv").config()
const { connection } = require("./db")
const { userRouter } = require("./route/user.route")
const cors = require("cors")
const { urlRouter } = require("./route/url.route")
const app = express()
app.use(express.json())
app.use(cors())



app.use("/users",userRouter)
app.use("/url",urlRouter)
// app.use(LogMiddleware())

app.get("/",(req,res)=>{
    res.send("Hiii From Gurucool Home Page")
})


app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Server is running...")

    } catch (error) {
        console.log(error)
    }
})
module.exports = app

// const express=require("express")
// const cors=require("cors")


// const app = express()

// app.use(express.json())
// app.use(cors())

// app.get("/",(req,res)=>{
//     console.log("hiii")
//     res.send("Hii from Index page")
// })

// app.listen(8080,()=>{
//     console.log("server is running.....")
// })

// module.exports=app