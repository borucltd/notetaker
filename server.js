// ===========================================================================
// MODULES
// ===========================================================================

const express = require('express');
const fs = require('fs');
const path = require('path');

// ===========================================================================
// SERVER 
// ===========================================================================

const server = express();
const PORT = process.env.PORT || 4000;
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// ================================================================================
// ROUTING
// ================================================================================


// http:/X.X.X.X:YYYY/notes ==> ./public/notes.html
server.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });

// http:/X.X.X.X:YYYY/* ==> ./public/index.html
server.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });





// =============================================================================
// LISTENER
// =============================================================================

server.listen(PORT, function() {
  console.log("Server listening on PORT: " + PORT);
});
