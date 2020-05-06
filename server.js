// ===========================================================================
// MODULES
// ===========================================================================

const express = require('express');
const fs = require('fs');

// ===========================================================================
// SERVER 
// ===========================================================================

const server = express();
const PORT = process.env.PORT || 4000;
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// ================================================================================
// ROUTER
// ================================================================================


// =============================================================================
// LISTENER
// =============================================================================

server.listen(PORT, function() {
  console.log("Server listening on PORT: " + PORT);
});
