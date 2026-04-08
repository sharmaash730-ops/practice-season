const express = require('express');
const app = express();
app.use(express.json());

require('./db/connection')
let user = require('./models/user');
let User = require('./models/user');

//get all
app.get('/ashish2', async (req, res) => {
    const result = await user.find();
    res.send(result)
})
//get by id
app.get('/ashish2/:id', async (req, res) => {
    let id = Number(req.params.id);
    let result = await user.findOne({ id })
    res.send(result);
})

//post all
app.post('/ashish2', async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);
})
//put
app.put('/ashish2/:id', async (req, res) => {
    let id = Number(req.params.id);
    let data = req.body;
    let result = await user.updateOne({ id }, { $set: data });
    res.send(result);
})
//delete all
app.delete('/ashish2', async (req, res) => {
    let result = await user.deleteMany();
    res.send(result);
})
//delete one
app.delete('/ashish2/:id', async (req, res) => {
    let id = Number(req.params.id);
    let result = await user.deleteOne({ id });
    res.send(result);
})
app.listen(3000);