var express = require('express');
var server = express();
var routes = require('./routes/routes');
var mongoose = require('mongoose');
const cors = require('cors');
mongoose.connect("mongodb+srv://admin:123@cluster0.lmy7mlw.mongodb.net/test?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    function checkDB(error) {
        if (error) {
            console.log("errorr")
        }
        else {
            console.log("DB Connected!")
        }
    });
server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(8000, function check(error) {
    if (error) {
        console.log("error in code / connection")
    }
    else {
        console.log("DB started / connected")
    }
});