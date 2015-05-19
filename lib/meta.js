"use strict";
function SoapMeta(reqMeta, resMeta, soapHeader) {
  this.request = reqMeta;
  this.response = resMeta || null;
  this.soapHeader = soapHeader || null;
}

SoapMeta.buildReqMeta = function (xml, headers, message) {
  return { xml: xml, headers: headers, message: message };
};

SoapMeta.buildRespMeta = function (xml, headers, statusCode) {
  return { xml: xml, headers: headers, statusCode: statusCode };
};

module.exports = SoapMeta;
