'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _syncanoServer = require('syncano-server');

var _syncanoServer2 = _interopRequireDefault(_syncanoServer);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ctx => {
  const { data, response } = (0, _syncanoServer2.default)(ctx);

  if (ctx.args.sender && ctx.args.receiver && ctx.args.wishes) {
    var newCrypto = _crypto2.default.randomBytes(2).toString('hex');
    console.log(newCrypto);
    console.log(data.wishes.where("cryptoId", newCrypto).list());

    while (data.wishes.where("cryptoId", newCrypto).list()) {
      newCrypto = _crypto2.default.randomBytes(2).toString('hex');
    }
    data.wishes.create({
      sender: ctx.args.sender,
      receiver: ctx.args.receiver,
      wishes: ctx.args.wishes,
      cryptoId: newCrypto
      //, wishDate: Date.now()
    }).then(wishObj => {
      response.json({ msg: `${ctx.args.wishes} ${ctx.args.receiver}! od ${ctx.args.sender}!. Wishes with ID ${wishObj.id} created! Wishes id: ${wishObj.id}` });
    });
  }
};