#!/usr/bin/env node
/* eslint-disable global-require, import/no-dynamic-require, no-console  */

const fs = require('fs');
const path = require('path');


try {
  const pkg = require(path.resolve(process.cwd(), './package.json'));
  const app = path.resolve(process.cwd(), './app.json');
  const m = JSON.parse(fs.readFileSync(app).toString());
  fs.writeFileSync(app, JSON.stringify({ ...m, version: pkg.version }));
} catch (err) {
  console.error('No root package.json found.');
}
