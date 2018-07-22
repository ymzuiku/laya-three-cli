# Use Parcel make Layaair Game

[中文文档](./READMECN.md)

> Package power Parcel and [parcel-plugin-change-file](https://github.com/ymzuiku/parcel-plugin-change-file)

## Feature

- hot reload H5 and WeChat
- build WeChat project by cli
- use any IDE code your project

## Install 

```sh
$ npm install -g laya-three-cli
```

## Use

```sh
$ laya-three-cli your-project
```

## Start H5 Game

```
$ yarn install
$ yarn start
```
And, open `http://127.0.0.1:1234`

## Start WeChat Game

```sh
$ yarn install
$ yarn core
$ yarn wechat
```

And, use `微信开发者工具` open `dev-wechat` dir

## Update LayaAir

LayaAir is no update source code in npmjs.com, if you need update Layair source code, please do this:

- open [LayaAir Web](https://ldc.layabox.com/layadownload/?type=layaair-LayaAir%201.7.19.1%20beta) , and download new package
- copy libs in you project, cover `bin/libs`
- done!