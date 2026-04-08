const express = require('express');
const router = express.Router();
const user = require('./../models/user')

// get all
router.get('/', async (req, res) => {
    const result = await user.find();
    res.send(result)
})
//get by id
router.get('/:id', async (req, res) => {
    let id = Number(req.params.id);
    let result = await user.findOne({ id })
    res.send(result);
})

//post all
router.post('/', async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);
})
//put
router.put('/:id', async (req, res) => {
    let id = Number(req.params.id);
    let data = req.body;
    let result = await user.updateOne({ id }, { $set: data });
    res.send(result);
})
//delete all
router.delete('/', async (req, res) => {
    let result = await user.deleteMany();
    res.send(result);
})
//delete one
router.delete('/:id', async (req, res) => {
    let id = Number(req.params.id);
    let result = await user.deleteOne({ id });
    res.send(result);
})
module.exports = router;