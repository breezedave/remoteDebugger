const Koa = require('koa');
const Router = require("@koa/router");
const koaBody = require('koa-body')();
const log = [];

const app = new Koa();
const router = new Router();

router.get("/", async ctx => {
    ctx.body = log;
});

router.get("/clear", async ctx => {
    log.length = 0;
    ctx.body = "Cleared";
});

router.post("/", koaBody, async ctx => {
    console.log(ctx.request);
    log.push(ctx.request.body);

    ctx.body = "Ok";
});

const port = 8085;

app
.use(router.routes())
.use(router.allowedMethods())

app.listen(process.env.PORT || port);
