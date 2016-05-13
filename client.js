var http = require('http');

function PostData(codestring) {

    post_data = JSON.stringify(codestring);

    // An object of options to indicate where to post to
    var post_options = {
        host: 'localhost',
        port: '7000',
        path: '/in',
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


// Usage Example

var obj = {
    'value' : "Test post from Node.js client",
    'number' : 55,
    num: 77
};

console.log("sending:");
console.dir(obj);
PostData(obj);

