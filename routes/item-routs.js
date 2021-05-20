var express = require ('express')

var router = express.Router()

router.get('/', (req, res) => {
    console.log("Get Item")
    res.send('Get Item Response')
})

router.post('/', (req, res) => {
    console.log("Post Item")
    res.send('Post Item Response')
})

router.put('/', (req, res) => {
    console.log("Put Item")
    res.send('Put Item Response')
})

router.delete('/', (req,res) => {
    console.log("Delete Item")
    res.send('Delete Item Response')
})

module.exports = router