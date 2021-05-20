const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

// app.use('/',(req,res)=>{
//     console.log("Default Path")
//     res.send("Wc Default Path")
// })

app.use('/customer',(req, res)=>{
    console.log("Customer Path")
    res.send("Response Customer Path")
})

app.use('/item',(req, res)=>{
    console.log("Item Path")
    res.send("Response Item Path")
})



app.listen(port,()=>{
    console.log("Server Started...")
})