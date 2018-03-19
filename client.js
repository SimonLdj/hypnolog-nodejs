// Hypnolog-node Usage Examples:

var HL = require('./hypnolog');

// Logging Examples:

// log a string
let str = "Hello HypnoLog from JavaScript!";
HL.log(str, "string");

// log numbers array
let numbers =  Array.from({length: 50}, (v, i) => (i*10)%100 + Math.floor(Math.random() * 10));
HL.log("Example of logging Array of numbers:", "string");
HL.log(numbers, "plot");

// TODO: Multi line graph

// TODO: log 2d array
//let array2d = Array.from({length: 10}, () => Array.from({length: 10}, () => Math.floor(Math.random() * 40)));
//// TODO: call it 2d heat map
//log(array2d, "2dnumbersarray");

// TODO: histogram

// log Lat-Long Geo locations using Google maps
let locations = [
    ['Lat', 'Long', 'Name'],
    [37.4232, -122.0853, 'Work'],
    [37.4289, -122.1697, 'University'],
    [37.6153, -122.3900, 'Airport'],
    [37.4422, -122.1731, 'Shopping']
];
HL.log("Example of logging Lat-Long Geo locations using Google maps:", "string");
HL.log(locations, "GoogleMaps");

// log custom object
let rectangle = {
    higth : 20,
    width : 10,
    color : "green"
}
HL.log("Example of logging custom object:", "string");
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
HL.log("Example of logging custom object with nested custom objects:", "string");
HL.log(car);

// TODO: Example of logging with tags

