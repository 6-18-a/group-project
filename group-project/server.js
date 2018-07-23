// module imports
const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cors = require('cors')

// express config
const app = express();
app.use(bodyParser.json())

// !!! DEVELOPMENT ONLY (start) !!! //

// var corsOptions = {
//     origin: 'http://localhost:4200',
//     optionsSuccessStatus: 200
// }

// app.use(cors(corsOptions))

// !!! DEVELOPMENT ONLY (end) !!! //
app.post('/inputdesign', (request, response) => {

    var Design = new Design({
        designName: request.body.designName,
        price: request.body.price,
        adminprice: request.body.adminprice,
        designImage: request.body.designImage,
    });
    item.save().then((document) => {
        response.redirect('/showItems');
    }, (error) => {
        response.status(400).send(error);
        //response.send(JSON.stringify(response.body));
    });
});

app.post('/input', (request, response) => {

    var item = new Item({
        itemName: request.body.itemName,
        price: request.body.price,
        adminprice: request.body.adminprice,
        description: request.body.description,
        amount: request.body.amount,
        itemImage: request.body.itemImage,
    });
    item.save().then((document) => {
        response.redirect('/showItems');
    }, (error) => {
        response.status(400).send(error);
        //response.send(JSON.stringify(response.body));
    });
});

// !!! PRODUCTION ONLY (start) !!! //

var distDir = __dirname + "/dist/group-project/";
app.use(express.static(distDir));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + "/dist/group-project/"))
})

// !!! PRODUCTION ONLY (end) !!! //

// server config
app.listen(process.env.PORT || 8080);
