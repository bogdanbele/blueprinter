var glob = require("glob")

const options = {};

glob("**/components/*/**.scss",options,function(err,matches){
    console.log(matches)
})
