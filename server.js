// ===========================================================================
// MODULES global
// ===========================================================================

const express = require('express');

// ===========================================================================
// MODULES local
// ===========================================================================

const apiRoutes = require('./local_modules/apiRoutes');
const htmlRoutes = require('./local_modules/htmlRoutes');


// ===========================================================================
// SERVER set up
// ===========================================================================

const server = express();
const PORT = process.env.PORT || 3000;

// middleware functions
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// ================================================================================
// ROUTING (api NEEDS to go before HTML)
// ================================================================================

// API routing, take object apiRoutes (which is a function) and run with argument server
apiRoutes(server);

// non-API routing, take object htmlRoutes (which is a function) and run with argument server
htmlRoutes(server);



// =============================================================================
// LISTENER
// =============================================================================

server.listen(PORT, function() {
  console.log("Server listening on PORT: " + PORT);
});
