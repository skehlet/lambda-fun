'use strict';

const Promise = require('bluebird');

module.exports = function (handler) {
    return function (event, context, callback) {
        return new Promise(function (resolve, reject) {
            if (handler.length < 3) {
                resolve(handler(event, context));
            } else {
                handler(event, context, function (err, result) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            }
        }).asCallback(callback);
    };
};
