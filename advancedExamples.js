// HypnoLog NodeJS advanced usage examples:

// Import HypnoLog as HL
var HL = require('./hypnolog');
// Note: When using from npm, require like this:
//var HL = require("hypnolog-nodejs")

// == Initialization ==
HL.initialize({
        host: "localhost",
        port: 7000,
        errorCallback: (e) => console.log(`Error while logging with HypnoLog :( \n${e}`)
    },
    () => console.log("HypnoLog initialized"));

// TODO: Example of logging with tags

