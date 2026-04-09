const express = require('express');
const app = express();
app.use(express.json());

//change dns
const dns=require('dns');
dns.setServers(["1.1.1.1","8.8.8.8"])

//database connection
require('./db/connection');
const Users = require('./Models/User');

//post function
app.post('/', async (req, res) => {
    let user = new Users(req.body);
    let result = await user.save();
    res.send(result);
})
app.listen(3000);
