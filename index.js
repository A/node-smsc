'use strict';

/**
 * Module dependencies.
 */
var http                = require('http');


// End of dependencies.


module.exports = function () {

};

/**
 * 
 * @param {Object} credentials 
 *                         .login
 *                         .password
 */
var Sender = function (credentials) {
  this.credentials      = credentials;

};


Sender.prototype.sms = function(phones, message, cb) {
  var uri = [
    'www.smsc.ru/sys/send.php?login=', this.credentials.login,
    '&psw=', this.credentials.password,
    '&phones=', phones,
    '&mes=', message,
    '&sender=chat&charset=utf-8'
  ];
  this.request(uri, cb);
};


Sender.prototype.request = function(options, cb) {
  http.get('http://www.google.com/index.html', function(res) {
    cb(null, res);
  }).on('error', function(err) {
    cb(err);
  });
};