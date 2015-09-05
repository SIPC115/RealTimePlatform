/**
 * Created by Jeffrey Zhang on 2015/9/4.
 */

var mongodb = require('mongodb');

//Working with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;
var db = undefined;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/local';

function MongoDB_open(){
    // Use connect method to connect to the Server
    MongoClient.connect(url, function (err, database) {
        if (err) console.log('Unable to connect to the mongoDB server. Error:', err);
        else {db = database;}
    });
}

exports.db = db;
exports.MongoDB_open = MongoDB_open;