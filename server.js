// ===========================================================================
// MODULES global
// ===========================================================================

const express = require('express');

// ===========================================================================
// MODULES local
// ===========================================================================

const htmlRoutes = require('./local_modules/htmlRoutes');
const apiRoutes = require('./local_modules/apiRoutes');

// ===========================================================================
// SERVER set up
// ===========================================================================

const server = express();
const PORT = process.env.PORT || 4000;

// middleware functions
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// ================================================================================
// ROUTING
// ================================================================================

// non-API routing, take object htmlRoutes (which is a function) and run with argument server
htmlRoutes(server);

// API routing, take object apiRoutes (which is a function) and run with argument server
apiRoutes(server);


// =============================================================================
// LISTENER
// =============================================================================

server.listen(PORT, function() {
  console.log("Server listening on PORT: " + PORT);
});
