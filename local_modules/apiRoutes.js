// ===========================================================================
// MODULES global
// ===========================================================================
const path = require('path');
const fs = require('fs');

// Our database
const dbFile = path.join(__dirname, "../db/db.json");


function readDatabase(req, res, next) {

  console.log(dbFile);

  // read database
  fs.readFile(dbFile, (err, data) => {
    
    if (err) {
     console.log(`Database reading error ${err}`);
     throw err;
    }

      // we need to parse raw data into JSON
    let records = JSON.parse(data);
    console.log(records);
    res.json(records);   
    
  });
  

  
}

function displayDatabase(req, res) {
  console.log(content);
}






// Function which does the routing for API requests
function apiRoutes(server) {

  // GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
  server.get("/api/notes", [readDatabase]);
   

 // server.get("/api/notes", function(req, res) {

   
   //  console.log("hhhere");
    //res.json("{name}");
  //});

}

 


// module exports funciton htmlRoutes as object
module.exports = apiRoutes
