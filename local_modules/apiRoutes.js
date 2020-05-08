// ===========================================================================
// MODULES global
// ===========================================================================
const path = require('path');
const fs = require('fs');

// Our database
const dbFile = path.join(__dirname, "../db/db,json");

function readDatabase(req, res, next) {

  // read database
  fs.readFile(dbFile, (err, data) => {

    if (err) throw err;
    console.log("Reading database...");
  });
  
  // go to the next function and pass database
  next(data)
}

function displayDatabase(req, res) {
  console.log('CB1');
}






// Function which does the routing for API requests
function apiRoutes(server) {

  // GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
  server.get("/api/notes", [readDatabase, displayDatabase]);
   
 
  //res.json(tableData);

}

// module exports funciton htmlRoutes as object
module.exports = apiRoutes






