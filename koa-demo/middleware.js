const Koa = require("koa");
const app = new Koa();

const middleware1 = function async(ctx, next) {
  console.log("這是 middleware1");
  // console.log(ctx.request);
  // next();
};

const middleware2 = function async(ctx, next) {
  console.log("這是 middleware2");
  // console.log(ctx.request);
  next();
  console.log("middleware2 end");
};

const middleware3 = function async(ctx, next) {
  console.log("這是 middleware3");
  // console.log(ctx.request);
  next();
  console.log("middleware3 end");
};

// 按照給予執行中間件順序
// 然後在response回去，從內往外。
app.use(middleware3);
app.use(middleware2);
app.use(middleware1);

app.listen(3000);
