/**
 * Created by Jeffrey Zhang on 2015/9/4.
 */

var db = require('./modules/db');

/**
 *  Open Database Connection first then open server
 */
function openDB(callback){
    //db.DB('mongodb').open();
    callback();
}
openDB(function(){
   /**
    * start server
    */
});


/**
 * use database operation
 *
 * ex. var operation = db.DB('mongodb').operation();
 *     operation.insert({name:'1'});
 */