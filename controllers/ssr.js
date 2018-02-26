const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

exports.Handle = async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
}