const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors');
const koaBody = require('koa-body');
const json = require('koa-json');

const app = new Koa();
const router = new Router();

router.prefix('/api');

router.get('/', (ctx) => {
  // ctx 上下文，可以讓我們獲得所有request和response 訊息，並且作為對應處理
  console.log(ctx);
  ctx.body = 'Hello World';
});

router.get('/getParams', (ctx) => {
  // ctx.router available
  // get: params
  // set -> url?name=xxx&age=xx&gender=xxx
  const params = ctx.request.query;
  console.log(params); // {name: 'xxx', age: 'xx', gender: 'xxx'}
  ctx.body = {
    ...params
  };
});

router.post('/post', async ctx => {
  const { body } = ctx.request;
  console.log(ctx.request);
  ctx.body = {
    ...body
  }
});

router.post('/user', async ctx => {
  const { name, email } = ctx.request.body;
  const { role } = ctx.request.header;

  if (!name || !email) {
    ctx.body = {
      code: 404,
      msg: 'name 和 email 不為空'
    }

    return;
  } else if (role !== 'admin') {
    ctx.body = {
      code: 401,
      msg: 'unauthorized post'
    }

    return;
  }

  ctx.body = {
    code: 200,
    data: {
      name,
      email
    },
    msg: '成功'
  };
})

/**
 * router.routes() - 是我們前面定義的路由方法，把它添加到 app 裡
 * app.use() - 使用中間件，整合到 app 中。
 * allowedMethods - 攔截器，如果找不對對應的router，會返回 4xx
 */
app.use(koaBody());
app.use(cors());
app.use(json({ pretty: false, param: 'pretty' }));
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
