/**
 * Created by Jeffrey Zhang on 2015/9/4.
 */

var mongodb = require('mongodb');
var mongo_connection = require('./mongo_connect');
var db = mongo_connection.db;

function insert(data){

    var collection = db.collection('replay');
    collection.insertOne(data, function (err, result) {
        if (err) {console.log(err);}
    });
}

function find(data){
    collection.find({name: data}).toArray(function (err, result) {
        if (err) {
            console.log(err);
        } else if (result.length) {
            console.log('Found:', result);
        } else {
            console.log('No document(s) found with defined "find" criteria!');
        }
        //Close connection
        db.close();
    });
}

exports.insert = insert;
exports.find = find;