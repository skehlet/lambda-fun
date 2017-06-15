const lambdaHandlerPromiseWrapper = require('./lambda-handler-promise-wrapper');

const handler = lambdaHandlerPromiseWrapper(function (event) {
    return `Handling event ${JSON.stringify(event)}`;
});

handler({foo: 'bar'}, {}, function (err, results) {
    console.log('err:', err);
    console.log('results:', results);
});
