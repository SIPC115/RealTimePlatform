/**
 * Created by Jeffrey Zhang on 2015/9/4.
 */

var mongo_connection = require('./mongo_dao/mongo_connect');
var mongo_operation = require('./mongo_dao/mongo_operate');

//mongodb class
function Mongodb(){

    if(Mongodb.instance !== undefined){
        return Mongodb.instance;
    }

    Mongodb.instance = this;

    Mongodb.prototype.open = function(){
        mongo_connection.MongoDB_open();
    };

    Mongodb.prototype.operation = function(){
        return mongo_operation;
    };

    console.log("Request handler 'mongodb' was called.");
}

function Redis(){
    console.log("Request handler 'redis' was called.");
}

function Mysql(){
    console.log("Request handler 'mysql' was called.");
}

exports.mongodb = Mongodb;
exports.redis = Redis;
exports.mysql = Mysql;