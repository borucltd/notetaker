// ===========================================================================
// MODULES global
// ===========================================================================
const path = require('path');

// Function which does the routing to non-api GET requests
function htmlRoutes(server) {

server.get("/notes", function(req, res) {
    console.log("Asked for ===" + req);
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

server.get("/assets/:type/:name", function(req, res) {

  console.log(req.params);

  if (req.params.type === "css" || req.params.type === "js") {
    res.sendFile(path.join(__dirname, `../public/assets/${req.params.type}/${req.params.name}`));

  } else {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  }

});

// http:/X.X.X.X:YYYY/* ==> ./public/index.html
server.get("/", function(req, res) {
    
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

}

// module exports funciton htmlRoutes as object
module.exports = htmlRoutes