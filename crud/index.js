const express = require('express');
const { result } = require('lodash');
const app = express();
const mongoose = require('mongoose');
// const cors = require('cors');
const port = 3000;
const host = "http://127.0.0.1:" + port;

app.listen(port, () => console.log(host));


//middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));
// app.use(cars()); //whitelist all incoming ip address

//step1:MongDB connection-mongoose
const MongodbURL = "mongodb://127.0.0.1:27017/";

mongoose.connect(MongodbURL, { 'dbName': 'unit7db' })
    .then(() => console.log('***connected***'))
    .catch(error => handleError(error.message));

//step2:create a schema
const studentSchema = new mongoose.Schema(
    {
        "id": { type: Number, required: true, uique: true },
        "first_name": { type: String, required: true },
        "last_name": { type: String, required: true },
        "email": { type: String, required: true, unique: true },
        "gender": { type: String, required: true },
        "ip_address": { type: String, required: true },
    }

);

//step3:create a model(collection)
const student = mongoose.model('students', studentSchema);

//CRUD

//APIs
app.get('/', (req, res) => {
    res.send('hi');
})

//GET all
app.get('/students', async (req, res) => {
    const result = await student.find();
    res.send(result);
})

app.get('/students/id/:id', async (req, res) => {
    let id = Number(req.params.id);
    const result = await student.find({ "id": id });
    res.send(result);
})

app.post('/students', async (req, res) => {
    // const data = {
    //     "id": 111,
    //     "first_name": "harry",
    //     "last_name": "Potter",
    //     "email": "harrypotter@gmail.com",
    //     "gender": "bigender",
    //     "ip_address": "290-2983-837"
    // }
    const data = req.body;
    const result = await student.insertMany(data);
    res.send(result);

})

app.put('/students/:id', async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;
    const result = await student.updateOne({ id }, { $set: data });
    res.send(result);
})

app.delete('/students/:id', async (req, res) => {
    const id = Number(req.params.id);
    const result = await student.deleteOne();
    res.send(result);
})
app.delete('/students', async (req, res) => {
    const result = await student.deleteMany();
    res.send(result);
})
// app.get('/students/gender/:gender', async (req, res) => {
//     let id = Number(req.params.gender);
//     const result = await student.find({ "gender": gender });
//     res.send(result);
// })