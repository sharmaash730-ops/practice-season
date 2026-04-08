const express = require('express');
const app = express();
app.use(express.json());


require('./db/connection')
let user = require('./models/user');
let User = require('./models/user');

//import the router file
const personRoutes = require('./routes/personRoutes');

//use the router
app.use('/ashish2', personRoutes);

app.listen(3000);