var express = require ('express')

var router = express.Router()

router.get('/', (req, res) => {
    console.log("Get Customer")
    res.send('Get Customer Response')
})

router.post('/', (req, res) => {
    console.log("Post Customer")
    res.send('Post Customer Response')
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