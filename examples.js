// HypnoLog NodeJS basic usage examples:

// Import HypnoLog as HL
var HL = require('./hypnolog');
// Note: When using from npm, require like this:
//var HL = require("hypnolog-nodejs")


// Logging Examples:

// log a string
let str = "Hello HypnoLog from NodeJS!";
HL.log(str);

// log numbers array
let numbers =  Array.from({length: 50}, (v, i) => (i*10)%100 + Math.floor(Math.random() * 10));
HL.log("Example of logging Array of numbers:");
HL.log(numbers, "plot");

// TODO: Multi line graph

// Log 2d array as Heatmap
let arr2d = [];
for (let i = 0; i < 10; i++) {
    arr2d[i] = [];
    for (let j = 0; j < 10; j++) {
        arr2d[i][j] = i*10 + j;
    }
}
HL.log("Example of logging 2d number array as Heatmap:");
HL.log(arr2d, "heatmap");

// TODO: histogram

// log Lat-Long Geo locations using Google maps
let locations = [
    ['Lat', 'Long', 'Name'],
    [37.4232, -122.0853, 'Work'],
    [37.4289, -122.1697, 'University'],
    [37.6153, -122.3900, 'Airport'],
    [37.4422, -122.1731, 'Shopping']
];
HL.log("Example of logging Lat-Long Geo locations using Google maps:");
HL.log(locations, "GoogleMaps");

// log custom object
let rectangle = {
    higth : 20,
    width : 10,
    color : "green"
}
HL.log("Example of logging custom object:");
// note, default logging type is "object"
HL.log(rectangle);

// log custom object with nested custom objects
let car = {
    brand : "Seat",
    model : "Mii",
    engine : {
        numberOfCylinders : 3,
        acceleration : 14.4
        },
        color : "red"
    };
HL.log("Example of logging custom object with nested custom objects:");
HL.log(car);

