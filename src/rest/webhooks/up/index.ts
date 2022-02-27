import Router from "koa-router";
import {handleWebhookEvent} from "../../../modules/up";

const router = new Router({
  prefix: '/up'
});

router.post('/', async (ctx, next) => {
  try {
    handleWebhookEvent(ctx.request.body);
  } catch (err) {
    console.warn('Failed to handle UP webhook', err);
  }

  ctx.body = {
    msg: 'Done'
  }

  return next();
});

export {router};