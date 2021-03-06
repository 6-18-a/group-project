// module imports
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const cors = require('cors')

const handlebars = require("express-handlebars").create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// express config
const app = express();
app.use(bodyParser.json())

// !!! DEVELOPMENT ONLY (start) !!! //

// var corsOptions = {
//     origin: 'http://localhost:4200',
//     optionsSuccessStatus: 200
// }

// app.use(cors(corsOptions))
app.get("/", (request, response) => {
  response.render("home");
});

app.get("/store", (request, response) => {
  response.render('store');
});

app.get("/input", (request, response) => {
  response.render('input');
});
app.get("/showItems", (request, response) => {
  response.render('showItems');
});
// !!! DEVELOPMENT ONLY (end) !!! //


// !!! PRODUCTION ONLY (start) !!! //

var distDir = __dirname + "/dist/group-project/";
app.use(express.static(distDir));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + "/dist/group-project/"))
})

// !!! PRODUCTION ONLY (end) !!! //

// server config
app.listen(process.env.PORT || 8080);
