# Simply SMSC API implementation for NodeJS

```JS
var Sender = require('smsc');
var sender = new Sender('seryoja', '0po98iu7');

sender.sms(79223438450, 'How are you?', function (err) {
  console.log(err);
});
```