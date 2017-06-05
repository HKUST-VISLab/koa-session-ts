koa-session-ts
=================

[![Build Status](https://travis-ci.org/HKUST-VISLab/koa-session-ts.svg?branch=master)](https://travis-ci.org/HKUST-VISLab/koa-session-ts)
[![codecov](https://codecov.io/gh/HKUST-VISLab/koa-session-ts/branch/master/graph/badge.svg)](https://codecov.io/gh/HKUST-VISLab/koa-session-ts)
[![David](https://david-dm.org/HKUST-VISLab/koa-session-ts/status.svg)](https://github.com/HKUST-VISLab/koa-session-ts)
[![Greenkeeper badge](https://badges.greenkeeper.io/HKUST-VISLab/koa-session-ts.svg)](https://greenkeeper.io/)


A body parser for koa, base on [co-body](https://github.com/tj/co-body). support `json`, `form` and `text` type body.

## Install

`npm install koa-session-ts --save`

## Usage

```ts

import * as Koa from "koa";
import session from "koa-session-ts";

const app = new Koa();
app.use(session());

app.use(async ctx => {
  // the parsed body will store in ctx.request.body
  // if nothing was parsed, body will be an empty object {}
  ctx.body = ctx.request.body;
});
```


## Licences

[MIT](LICENSE)
