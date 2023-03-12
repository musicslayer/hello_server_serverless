const http = require("./server/http.js");
const log = require("./util/log.js");
const account = require("./game/account.js");

// Create server.
const server = http.createHTTPServer();

// Create the log files.
log.createLogFiles();

// Finish
log.logEvent("SERVER", "main", "Server Initialized");

/////////////////////
// Development code:
/////////////////////

// Create some starter accounts.
account.initializeAccount("mr_a", "fluffy", "mjv59@cornell.edu");
account.initializeAccount("mr_c", "other", "musicslayerX@proton.me");

// Make mr_c start off as powerful.
account.setGameData("mr_c", "is_powerful", true);