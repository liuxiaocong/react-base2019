import AppSSR from '../src/AppSSR';
import React from 'react'
import { renderToString } from 'react-dom/server'
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
app.use(function (ctx, next) {
  //如果路由中间件已经有数据了，无需再走静态文件中间件了
  if (ctx.body) {
    return true;
  }

  return next();
});

app.use(serve({rootDir: RES_PATH}));

router.get('/', async(ctx, next) => {
  let $ = await loadHTMLTemplate(path.resolve(__dirname, '../build/app.html'));
  if (!$) {
    return ctx.body = null;
  }
  let str = renderToString(<AppSSR />);
  $('#root').html(str);
  return ctx.body = $.html();
});

app.listen(8088, _ => {
  console.log('server started')
});