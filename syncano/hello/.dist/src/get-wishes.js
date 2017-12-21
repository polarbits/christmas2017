"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _syncanoServer = require("syncano-server");

var _syncanoServer2 = _interopRequireDefault(_syncanoServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ctx => {
  const { response, data } = (0, _syncanoServer2.default)(ctx);
  if (ctx.args.wish) {
    data.wishes.where("cryptoId", ctx.args.wish).list().then(wishes => {
      response.json({ wishes });
    });
  }
};