var express = require ('express')
var router = express.Router()

const connection = require('../database/db')

router.get('/', (req, res) => {
    console.log("Get Customer")
    res.send('Get Customer Response')
})

router.post('/', (req, res) => {
    connection.query('INSERT INTO customer VALUES(?,?,?,?)',[req.body.id, req.body.name, req.body.address, req.body.salary], function (err, rows) {
        if(err) throw err
        res.send(rows)
      })
})

router.put('/', (req, res) => {
    console.log("Put Customer")
    res.send('Put Customer Response')
})

router.delete('/', (req,res) => {
    console.log("Delete Customer")
    res.send('Delete Customer Response')
})

module.exports = router