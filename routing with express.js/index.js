const express = require('express');
const app = express();
app.use(express.json());

require('./db/connection');
const user = require('./models/user');
const User = require('./models/user')

//GET all
app.get('/ashish2', async (req, res) => {
    const result = await user.find();
    res.send(result);
})

app.get('/ashish2/:id', async (req, res) => {
    let id = Number(req.params.id);
    const result = await user.findOne({ id });
    res.send(result);
})

app.post('/ashish2', async (req, res) => {
    let user = new User(req.body);
    let result = await User.save();
    res.send(result);
})

app.put('/ashish2/:id', async (req, res) => {
    let id = Number(req.params.id);
    let user = new User(req.body);
    let result = await user.updateOne({ id });
    res.send(result);
})
app.delete('/ashish2/id:id', async (req, res) => {
    let id = Number(req.params.id);
    let user = Number(req.params.id);
    const result = await User.deleteOne({ id });
    res.send(result);
})
app.delete('/ashish2', async (req, res) => {
    const result = await User.deleteMany();
    res.send(result);
})
app.listen(3000);