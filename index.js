const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

app.use('/',(res,req)=>{
    console.log("Default Path")
    res.send("Wc Default Path")
})

app.use('/customer',(res, req)=>{
    console.log("Customer Path")
    res.send("Wc Customer Path")
})


app.listen(port,()=>{
    console.log("Server Started...")
})