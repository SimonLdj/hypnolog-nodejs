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

// Define exports

exports.log = log;
