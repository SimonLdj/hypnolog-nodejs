var http = require('http');

// TODO: warp all HypnoLog logger in some module (or class)
// TODO: handle when server is down
// TODO: document according to node/javascript style

function log(data, type = "object") {
    
    // construct HypnoLog object according to the API
    let json = {
        data : data,
        type : type
    }

    // convert to JSON string
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
        const { statusCode } = res;
        if (statusCode !== 200) {
            let error = new Error(`HypnoLog error: Request Failed, Status Code: ${statusCode}`);
            console.error(error.message);
        }
        //res.setEncoding('utf8');
        //res.on('data', function (chunk) {
            //// print full response body
            //console.log('Response: ' + chunk);
        //});
    }).on('error', (e) => {
        console.error(`HypnoLog error: problem with request: ${e.message}`);
    });

    // post the data
    post_req.write(post_data);
    post_req.end();
}

// Define exports

exports.log = log;
