// HypnoLog NodeJS advanced usage examples:
//
// import HypnoLog as HL
var HL = require('./hypnolog');

// == Initialization ==
HL.initialize({
        host: "localhost",
        port: 7000,
        errorCallback: (e) => console.log(`Error while logging with HypnoLog :( \n${e}`)
    },
    () => console.log("HypnoLog initialized"));

// TODO: Example of logging with tags

