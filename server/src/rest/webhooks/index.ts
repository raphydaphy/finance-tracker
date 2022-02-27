import Router from "koa-router";

import * as up from './up';

const webhooks = [up];

const router = new Router({
  prefix: '/webhooks'
});

for (const webhook of webhooks) {
  router.use(webhook.router.routes());
  router.use(webhook.router.allowedMethods());
}

export {router};