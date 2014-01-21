'use strict';

/**
 * Module dependencies.
 */
var http                = require('http');


// End of dependencies.


/**
 * 
 * @param {Object} credentials 
 *                         .login
 *                         .password
 */
var Sender = module.exports = function (login, passwd) {
  this.credentials = {
    login: login,
    passwd: passwd
  };
};


Sender.prototype.sms = function(phones, message, cb) {
  var uri = [
    'www.smsc.ru/sys/send.php?login=', this.credentials.login,
    '&psw=', this.credentials.passwd,
    '&phones=', phones,
    '&mes=', message,
    '&charset=utf-8'
  ].join('');
  this.request(uri, cb);
};


Sender.prototype.request = function(uri, cb) {
  http.get(uri, function(res) {
    cb(null, res);
  }).on('error', function(err) {
    cb(err);
  });
};