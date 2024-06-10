const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({msg: "Hi, Its fetch all API"})
})

router.get('/:id', (req, res) => {
    res.json({msg: "Hi, Its single fetch API"})
})

router.post('/', (req, res) => {
    // res.json(req.body)
    const postRequest = req.body
    console.log(postRequest);
    res.json('Posted')
    // res.json({msg: "Hi, Its post API"})
})

router.delete('/:id', (req, res) => {
    res.json({msg: "Hi, Its delete API"})
})

router.patch('/:id', (req, res) => {
    res.json({msg: "Hi, Its update API"})
})


module.exports = router