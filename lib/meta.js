"use strict";
function SoapMeta(reqMeta, resMeta, soapHeader) {
  this.request = reqMeta;
  this.response = resMeta || null;
  this.soapHeader = soapHeader || null;
}

SoapMeta.buildReqMeta = function (xml, headers, dto, message) {
  return { xml: xml, headers: headers, dto: dto, message: message };
};

SoapMeta.buildRespMeta = function (xml, headers, dto, statusCode) {
  return { xml: xml, headers: headers, dto: dto, statusCode: statusCode };
};

module.exports = SoapMeta;
