// ===========================================================================
// MODULES global
// ===========================================================================
const path = require('path');

// ===========================================================================
// MODULES local
// ===========================================================================
const logger = require('./logger.js')

// Function which does the routing to non-api GET requests
function htmlRoutes(server) {

// /notes route
server.get("/notes", function(req, res) {

    logger("log",`Accessing ${req.url}`); 
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

// /assets/[css|js]/file route
server.get("/assets/:type/:name", function(req, res) {

  logger("log",`Accessing ${req.url}`); 

  if (req.params.type === "css" || req.params.type === "js") {
    res.sendFile(path.join(__dirname, `../public/assets/${req.params.type}/${req.params.name}`));

  } else {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  }

});

// anything else will return index.html
server.get("*", function(req, res) {
    
    logger("log",`Accessing ${req.url}`); 
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

}

// module exports function htmlRoutes as object
module.exports = htmlRoutes