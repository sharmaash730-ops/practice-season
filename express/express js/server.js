const express = require('express')
const app = express();

app.get('/', function (req, res) {
    res.send('welcome to my hotel');
})

app.get('/chole-bhature', (req, res) => {
    var chole_bhature = {
        chole: '1cup',
        bhature: 'medium',
        salad: 'onion-lemon'
    }
    res.send(chole_bhature);
})
app.get('/sweets', (req, res) => {
    var sweets = {
        ladoo: 1,
        rasmalai: 1,
        gulab_jamun: 1
    }
    res.send(sweets);
})

app.listen(3000)