/**
 * Created with JetBrains WebStorm.
 * User: Александр
 * Date: 16.05.15
 * Time: 14:21
 * To change this template use File | Settings | File Templates.
 */

"use strict";
function SoapMeta(reqMeta, resMeta, statusCode, soapHeader) {
  this.request = reqMeta || SoapMeta.buildReqMeta(null, null, null, null);
  this.response = resMeta || SoapMeta.buildRespMeta(null, null, null);
  this.statusCode = statusCode || null;
  this.soapHeader = soapHeader || null;
}

SoapMeta.buildReqMeta = function (xml, headers, dto, message) {
  return { xml: xml, headers: headers, dto: dto, message: message };
};

SoapMeta.buildRespMeta = function (xml, headers, dto) {
  return { xml: xml, headers: headers, dto: dto };
};

module.exports = SoapMeta;
