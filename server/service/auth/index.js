const githubAuth = require("./github"); 
const auth = require("./auth")

module.exports = { ...githubAuth, ...auth };
