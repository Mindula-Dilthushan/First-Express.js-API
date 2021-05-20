const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

const customer = require('./routes/customer-routs')
const item = require('./routes/item-routs')

app.use('/customer', customer)
app.use('/item', item)

app.listen(port,()=>{
    console.log("Server Started...")
})