var express = require('express'),
app = express(),
engines = require('consolidate'),
bodyParser = require('body-parser'),
MongoClient = require('mongodb').MongoClient,
assert = require('assert');


app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true })); 

// Handler for internal server errors
function errorHandler(err, req, res, next) {
console.error(err.message);
console.error(err.stack);
res.status(500).render('error_template', { error: err });
}

MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
    
        assert.equal(null, err);
        console.log("Successfully connected to MongoDB.");
    
        app.get('/', function(req, res){
    
            db.collection('movies').find({}).toArray(function(err, docs) {
                res.render('movieList', { 'movies': docs } );
            });
    
        });

        app.post('/add-movie', function(req, res, next) {
            let title = req.body.title;
            let year = +req.body.year;
            let imdb = req.body.imdb;

            db.collection('movies').insertOne({title, year, imdb});

            db.collection('movies').find().toArray(function(err, docs) {
                res.render('movieList', { 'movies': docs } );
            });

        });
    
        app.use(errorHandler);
        
        
        var server = app.listen(3000, function() {
            var port = server.address().port;
            console.log('Express server listening on port %s.', port);
        });
    
    });
    

/*

app.get('/', function(req, res, next) {
res.render('movieList', { 'fruits' : [ 'apple', 'orange', 'banana', 'peach' ] });
});

app.post('/favorite_fruit', function(req, res, next) {
var favorite = req.body.fruit;
if (typeof favorite == 'undefined') {
    next('Please choose a fruit!');
}
else {
    res.send("Your favorite fruit is " + favorite);
}
});

app.use(errorHandler);

var server = app.listen(3000, function() {
var port = server.address().port;
console.log('Express server listening on port %s.', port);
});
*/