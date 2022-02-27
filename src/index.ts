import 'dotenv/config';
import Koa from "koa";
import logger from "koa-logger";
import json from "koa-json";
import bodyParser from 'koa-bodyparser';

import * as env from './env';
import * as routes from './rest';

const app = new Koa();

app.use(json());
app.use(logger());
app.use(bodyParser());

for (const route of Object.values(routes)) {
  app.use(route.routes());
  app.use(route.allowedMethods());
}

app.listen(env.PORT, () => {
  console.info(`Server started on port ${env.PORT}`);
})