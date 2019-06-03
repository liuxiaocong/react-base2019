const Koa = require("koa");
const app = new Koa();
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const Promise = require("bluebird");
const serve = require('koa-static-server');
const readFileAsync = Promise.promisify(fs.readFile);
const RES_PATH = path.resolve(__dirname, '../build/');

/**
 * 读取HTML模版，返回cheerio实例
 * @param path
 * @return {Promise.<*>}
 */
async function loadHTMLTemplate(path) {
  try {
    let content = await readFileAsync(path);
    return cheerio.load(content);

  } catch (e) {
    console.error(e);
    return false;
  }
}

const router = require('koa-better-router')().loadMethods();

app.use(router.middleware());
app.use(serve({rootDir: RES_PATH}));

router.get('/', async(ctx, next) => {
  let $ = await loadHTMLTemplate(path.resolve(__dirname, '../build/index.html'));
  if (!$) {
    return ctx.body = null;
  }
  return ctx.body = $.html();
});

app.listen(8088, _ => {
  console.log('server started')
});