/**
 * Created by Jeffrey Zhang on 2015/9/4.
 */

var requestHandlers = require('./routerHandler');
var DBDriver = {};

DBDriver['mongodb'] = requestHandlers.mongodb;
DBDriver['redis'] = requestHandlers.redis;
DBDriver['mysql'] = requestHandlers.mysql;

//route to different database
function DBdriver_Names(database_name){
    if(typeof database_name == 'string'){
        return new DBDriver['mongodb']();
    }else{
        console.log('[ERROR] DBDriver_name parameter error.');
    }
}

exports.DB = DBdriver_Names;