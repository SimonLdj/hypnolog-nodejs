var http = require('http');

// TODO: handle when server is down, disable logger
// TODO: provide alternative when logger is disabled

// default object of options to indicate where to post to
let DEFAULT_POST_OPTIONS = {
    host: '127.0.0.1',
    port: '7000',
    path: '/logger/in',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
};

let errorCallback = null;
let isServerUp = true;

/**
 * Initialize HypnoLog logger and set options.
 * Calling initialization is optional, but it is good practise to do so as soon as possible in the
 * program.
 *
 * Initialize logger by checking if HypnoLog server is up, and allow user to set logger options and
 * configurations.
 *
 * @param {Object}  options          - Logger options.
 * @param {Object}  options.host     - HypnoLog server host name. Default is "127.0.0.1".
 * @param {Object}  options.port     - HypnoLog server port. Default is 7000.
 * @param {function} options.errorCallback     - Function to call when inner HypnoLog error occurred. Of signature (error).
 *
 */
function initialize(options, callback) {
    // TODO: make sure initialize cannot happen twice or twice at the same time (but async)

    if (options.host) DEFAULT_POST_OPTIONS.host = options.host;
    if (options.port) DEFAULT_POST_OPTIONS.port = options.port;
    if (options.errorCallback) errorCallback = options.errorCallback;

    // TODO: Check if server is responding
    isServerUp = true;

    // TODO: send `new session` message

    // initialization done, call callback
    typeof callback === 'function' && callback();
}

/**
 * Log given object using HypnoLog.
 *
 * Log the given object by sending it to HypnoLog server.
 *
 * @param {Object} data     - Object to log. Can be of any type. If not provided, an "undefined"
 * string will be used.
 * @param {string} type     - String represent the type of the logged object, will determine how the
 * object is visualized. If not provided, `object` type will be used
 *
 */
function log(data, type) {
    // wrap all in try..catch so HypnoLog will not disturb natural code flow
    try {
        // check arguments and set default value
        // `undefined` will be logged as "undefined" of type "object"
        // (as we can not actually send message without data to the server)
        // note: `null` serialized as "null".
        if (typeof data === "undefined") {
            data = "undefined";
            type = "object";
        }
        if (typeof type !== "string")
            type = determineObjectType(data);

        // TODO: check initialize was done and server is up, before continue
        // TODO: do initialization if not done yet. Make sure it is blocking - so no 2
        // initialization will happen.

        // construct HypnoLog object according to the API
        let json = {
            data : data,
            type : type
        }
        // convert to JSON string
        post_data = JSON.stringify(json);

        // use default post options
        var post_options = DEFAULT_POST_OPTIONS;
        post_options.headers['Content-Length'] =  Buffer.byteLength(post_data);

        // Set up the request
        var post_req = http.request(post_options, function(res) {
            const { statusCode } = res;
            if (statusCode !== 200) {
                throw new Error(`HypnoLog error: Request Failed, Status Code: ${statusCode}`);
            }
            //res.setEncoding('utf8');
            //res.on('data', function (chunk) {
                //// print full response body
                //console.log('Response: ' + chunk);
            //});
        }).on('error', (e) => {
            onError(new Error(`HypnoLog error: problem with request:\n${e.message}`));
        });

        // post the request to the server
        post_req.write(post_data);
        post_req.end();
    } catch (ex) {
        onError(ex);
    }
}

function onError(error) {
    if (typeof errorCallback === 'function') {
        // call user defined error-handle callback
        errorCallback(error);
    } else {
        // some default error-handling logic
        console.log("HypnoLog error occurred: ");
        console.log(error);
    }
}

/**
 * Tries to determine given object type for HypnoLog.
 *
 * For now supporting only string. Default is "object".
 *
 * @return {string} object type.
 */
function determineObjectType(obj) {

    // detect string
    if (typeof obj === "string")
        return "string";

    // default is `object`
    return "object";
}

// Define exports

exports.initialize = initialize;
exports.log = log;

