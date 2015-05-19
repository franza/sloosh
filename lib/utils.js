
"use strict";
var crypto = require('crypto');
module.exports = {
  passwordDigest: function passwordDigest(nonce, created, password) {
    // digest = base64 ( sha1 ( nonce + created + password ) )
    var pwHash = crypto.createHash('sha1');
    var rawNonce = new Buffer(nonce || '', 'base64').toString('binary');
    pwHash.update(rawNonce + created + password);
    return pwHash.digest('base64');
  },
  copyOwnProperties: function (object, dest, mutate) {
    mutate = mutate || function (res, key) {
      res[key] = object[key];
      return res;
    };
    dest = dest || { };
    return Object.keys(object).reduce(function (res, key) {
      return mutate(res, key);
    }, dest);
  }
};