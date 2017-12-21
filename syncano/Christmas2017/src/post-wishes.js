import Syncano from 'syncano-server'
import crypto from 'crypto'

export default (ctx) => {
  const {data,response} = Syncano(ctx)

  if (ctx.args.sender && ctx.args.receiver && ctx.args.wishes) {
  data.wishes.create({
    sender: ctx.args.sender,
    receiver: ctx.args.receiver,
    wishes: ctx.args.wishes,
    cryptoId: crypto.randomBytes(2).toString('hex')
    //, wishDate: Date.now()
  })
  .then(wishObj => {
    response.json(wishObj.cryptoId)
  })
}
}