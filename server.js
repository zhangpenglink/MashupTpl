const koa = require('koa')
const Router = require('koa-router')
const next = require('next')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

/**
 * App configuration.
 */
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({ path: '.env.example' });

/**
 * Connect to MongoDB.
 */
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.once('open', ()=>{
    console.log('数据库连接成功');
})
mongoose.connection.on('error', (err) => {
    console.error(err);
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
    process.exit();
});

/**
 * Controllers (route handlers).
 */
// const ssr = require('./controllers/ssr');

/**
 * app routes.
 */
const router = new Router()
router.get('*', async ctx => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
})
// router.get('*', ssr.Handle)

/**
 * Create Koa server.
 */
app.prepare()
    .then(() => {
        const server = new koa()
        server.use(async (ctx, next) => {
            ctx.res.statusCode = 200
            await next()
        })
        server.use(async (ctx, next) => {
            await router.routes()(ctx,next)
        })
        server.listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })