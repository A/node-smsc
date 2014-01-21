# Simply SMSC API implementation for NodeJS

```JS
var Sender = require('node-smsc');
var sender = new Sender({
  // Your credentials from http://www.smsc.ru
  user: seryoja,
  password: 0po98iu7
});

sender.sms(79223435363, fucntion (err, message) {
  console.log(err);
  console.log(message);
});
```