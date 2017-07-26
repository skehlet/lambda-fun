# Use Promise-returning handlers with Lambda 

Require this library and use it to wrap your promise-returning function to make it a lambda handler. 

## npm install

```
npm install --save https://github.com/skehlet/lambda-handler-promise-wrapper.git
```

## Usage

```
'use strict';

const lambdaHandlerPromiseWrapper = require('lambda-handler-promise-wrapper');

// ...

exports.handler = lambdaHandlerPromiseWrapper(function (event, context) {
    console.log('Received event:', JSON.stringify(event, null, 4));
    const subject = event.Records[0].Sns.Subject;
    const message = event.Records[0].Sns.Message;
    return push(message, subject);
});```
