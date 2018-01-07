let AWS = require('aws-sdk');
exports.handler = function(event, context, callback){
   console.log("Event is", event);
   callback(null, "success");
}