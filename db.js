var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');
var connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {


var add = function(model){
    model.save(function(err, model){
        if (err) return console.error(err);
    });
}

var getAll = function(model){
    model.find({},function(err, data){
        if (err) return console.error(err);
        return data;
    });
}