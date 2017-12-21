import Syncano from 'syncano-server'

export default (ctx) => {
  const {response,data} = Syncano(ctx)
  if(ctx.args.wish){
    data.wishes.where("cryptoId", ctx.args.wish).list()
    .then(wishes=>{
      response.json({wishes})
    })
  }
}
