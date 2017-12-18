'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _syncanoServer = require('syncano-server');

var _syncanoServer2 = _interopRequireDefault(_syncanoServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ctx => {
  const { response } = (0, _syncanoServer2.default)(ctx);

  if (ctx.args.firstname && ctx.args.lastname) {
    response.json({
      message: `Hello ${ctx.args.firstname} ${ctx.args.lastname}!`
    });
  } else {
    response.json({
      message: 'You have to send "firstname" and "lastname" arguments!'
    }, 400);
  }
};