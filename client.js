var http = require('http');

// TODO: warp all HypnoLog logger in some module (or class)
// TODO: handle when server is down

function log(data, type = "object") {
    
    // construct HypnoLog object according to the API
    let json = {
        data : data,
        type : type
    }

    post_data = JSON.stringify(json);

    // An object of options to indicate where to post to
    var post_options = {
        host: 'localhost',
        port: '7000',
        path: '/logger/in',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(post_data)
        }
    };

    // Set up the request
    var post_req = http.request(post_options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });

    // post the data
    post_req.write(post_data);
    post_req.end();
}


// Usage Example:

// log a string
let str = "Hello HypnoLog from JavaScript!";
log(str, "string");

// log numbers array
let numbers =  Array.from({length: 50}, (v, i) => (i*10)%100 + Math.floor(Math.random() * 10));
log("Example of logging Array of numbers:", "string");
log(numbers, "plot");

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
log("Example of logging Lat-Long Geo locations using Google maps:", "string");
log(locations, "GoogleMaps");

// log custom object
let rectangle = {
    higth : 20,
    width : 10,
    color : "green"
}
log("Example of logging custom object:", "string");
// note, default logging type is "object"
log(rectangle);

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
log("Example of logging custom object with nested custom objects:", "string");
log(car);

// TODO: Example of logging with tags

