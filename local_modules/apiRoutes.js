// ===========================================================================
// MODULES global
// ===========================================================================
const path = require('path');
const fs = require('fs');

// Reference to our database
const dbFile = path.join(__dirname, "../db/db.json");
const inMemoryDb = {};

// Callback which reads database
function readDatabase(req, res) {

  console.log(dbFile);

  // read database
  console.log(`INFO: reading database ${dbFile}`);
  fs.readFile(dbFile, (err, data) => {
    
    if (err) {
     console.log(`ERROR: Database reading error ${err}`);
     throw err;
    }

    // we need to parse raw data into JSON
    let records = JSON.parse(data);
    console.log(records);
    res.json(records);   
    
  });  
}

// Callback which writes to database
function addToDatabase(req, res, next) {

  console.log(dbFile);
  console.log(req.body);
}

// Callback which writes to database
function deleteFromDatabase(req, res,next) {

  console.log(req.body);
}

// Function which does the routing for API requests
function apiRoutes(server) {

  // GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
  server.get("/api/notes", readDatabase);
   
  // POST `/api/notes` - Should receive a new note to save on the request body, 
  // add it to the `db.json` file, and then return the new note to the client.
  server.post("/api/notes", [addToDatabase] );

  // * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete.
  server.delete("/api/notes/*", [deleteFromDatabase] );

}

// module exports funciton htmlRoutes as object
module.exports = apiRoutes

