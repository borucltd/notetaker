// ===========================================================================
// MODULES global
// ===========================================================================

const path = require('path');
const fs = require('fs');
const moment = require('moment');

// ===========================================================================
// LOG FILES global
// ===========================================================================

const accessLog = path.join(__dirname, "./logs/access.log");
const errorLog = path.join(__dirname, "./logs/error.log");


function logger(type,message) {

    type === "error" ? file=errorLog : file=accessLog;

    let when = moment().format('MMMM Do YYYY, h:mm:ss a'); 
    fs.appendFile(file, when + ": " + message +"\n", (err) => {

        if (err) throw err;
    
    });
}


module.exports = logger
  