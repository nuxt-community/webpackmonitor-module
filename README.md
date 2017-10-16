# Webpack Monitor Module

[![Greenkeeper badge](https://badges.greenkeeper.io/nuxt-community/webpackmonitor-module.svg)](https://greenkeeper.io/)

[![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/webpackmonitor/latest.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/webpackmonitor)
[![npm](https://img.shields.io/npm/dt/@nuxtjs/webpackmonitor.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/webpackmonitor)
[![CircleCI](https://img.shields.io/circleci/project/github/nuxt-community/webpackmonitor-module.svg?style=flat-square)](https://circleci.com/gh/nuxt-community/webpackmonitor-module)
[![Codecov](https://img.shields.io/codecov/c/github/nuxt-community/webpackmonitor-module.svg?style=flat-square)](https://codecov.io/gh/nuxt-community/webpackmonitor-module)
[![Dependencies](https://david-dm.org/nuxt-community/webpackmonitor-module/status.svg?style=flat-square)](https://david-dm.org/nuxt-community/webpackmonitor-module)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> Monitor Nuxt webpack optimization metrics through the development process using [webpackmonitor](https://github.com/webpackmonitor/webpackmonitor)

[📖 **Release Notes**](./CHANGELOG.md)

## Setup
- Add `@nuxtjs/webpackmonitor` dependency using yarn or npm to your project

- Add `@nuxtjs/webpackmonitor` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    '@nuxtjs/webpackmonitor',
 ],
}
```

- Optionally add `.monitor` to `.gitignore` file if you don't want to track reports with VCS.

## Usage

This module automatically captures stats from each **Production** build into `.monitor/stats.json` file if there was any diff.

You can use `yarn nuxt build --webpackmonitor` to launch monitor dashboard in your browser after build.

## Options

To customize defaults you can add `webpackMonitor` key to `nuxt.config.js`.
See [here](https://github.com/webpackmonitor/webpackmonitor) for possible options.

## License

[MIT License](./LICENSE)

Copyright (c) Nuxt.js Community - Pooya Parsa <pooya@pi0.ir>
