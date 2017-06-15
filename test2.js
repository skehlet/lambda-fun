'use strict';

const Promise = require('bluebird');

function wrapHandler(handler) {
    return function (event, context, callback) {
        return Promise.method(handler)(event, context).asCallback(callback);
    };
};


const handler = wrapHandler(function (event) {
    return `Handling event ${JSON.stringify(event)}`;
});

handler({foo: 'bar'}, {}, function (err, results) {
    console.log('err:', err);
    console.log('results:', results);
});
