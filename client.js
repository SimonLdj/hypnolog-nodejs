var http = require('http');

// TODO: warp all VDebug logger in some module (or class)

function log(data) {

    // TODO: support logging a string and warp it with an vdebug-log valid object

    // if logged data not an object, create an error object instead
    if (typeof data !== "object") {
        console.error("Logged data expected to be an Object");
        data = {
            type : "vdebug-error",
            error: "Vdebug error in Node.js client: Logged data expected to be an Object.",
            loggedData : data,
        }
    }

    post_data = JSON.stringify(data);

    // An object of options to indicate where to post to
    var post_options = {
        host: 'localhost',
        port: '7000',
        path: '/vdebug/in',
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

var obj = {
    'value' : "Test post from Node.js client",
    'number' : 55,
    comObj: {
        foo : "Fofo",
        x   : 20
    }
};

console.log("sending:");
console.dir(obj);

// Log data
log(obj);

