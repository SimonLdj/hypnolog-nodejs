HypnoLog NodeJS Library
============================

## What is HypnoLog?
*Get Hypnotized While Logging*

*HypnoLog* allows you to fast and easily visualize your application data/objects while debugging. From any environment, in any language. Forget about those black text-based console debug-printing back from the 70's. 

**See [HypnoLog main repo](https://github.com/SimonLdj/hypnolog-server).**

What it looks like, visualizing your data in the browser:
![alt text](/doc/images/screenshot_hypnolog-nodejs-example.png "HypnoLog UI screenshot")

## About HypnoLog-NodeJS Library
Logging using *HypnoLog* means sending your data as JSON HTTP request to HypnoLog server. This library wraps all of those into simple easy to use functions.

## Installation
This is a [Node.js](https://nodejs.org/en/) module available through the [npm registry](https://www.npmjs.com/).
```bash
npm install hypnolog-nodejs
```

If you haven't use *HypnoLog* before, [setup HypnoLog server](https://github.com/SimonLdj/hypnolog-server#setup-hypnolog-server) on your machine:
```bash
npm install -g hypnolog-server
```

## Usage
1. Start [HypnoLog Server]:
    ```bash
    hypnolog-server
    ```
2. View output: open [`http://127.0.0.1:7000/client.html`](http://127.0.0.1:7000/client.html) in your browser.
3. Import HypnoLog into your script:
    ```javascript
    var HL = require("hypnolog-nodejs")
    ```
4. Log:
    ```javascript
    // Log a string
    HL.log('Hello HypnoLog from NodeJS!');
    
    // log array of numbers as a graph (plot)
    HL.log([1,2,3], "plot");
    ```

For more examples, see [Basic Example](/examples.js) and [Advanced Example](advancedExamples.js) code files.

Read how to view the log and more about *HypnoLog* in [HypnoLog main repo page](https://github.com/SimonLdj/hypnolog-server).



[HypnoLog Server]: https://github.com/SimonLdj/hypnolog-server
