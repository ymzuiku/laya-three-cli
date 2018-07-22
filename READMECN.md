# 使用 Parcel 进行 Layaair 的游戏开发

[English Document](./README.md)

> 打包使用了 Parcel 和 [parcel-plugin-change-file](https://github.com/ymzuiku/parcel-plugin-change-file)


## 功能

- 开发过程热更新, 包括H5和微信小游戏
- 使用命令行编译你的微信小游戏
- 使用你习惯的任何IDE进行开发


## 安装 

```sh
$ npm install -g laya-three-cli
```

## 使用

```sh
$ laya-three-cli your-project
```

## 启动 H5 游戏

```
$ yarn install
$ yarn start
```
And, open `http://127.0.0.1:1234`

## 启动微信小游戏

```sh
$ yarn install
$ yarn core
$ yarn wechat
```

然后使用 `微信开发者工具` 打开 `dev-wechat` 目录

## 升级 LayaAir

LayaAir 并没有把源码放到 npmjs.com 上,并且在 Github.com 上的源码也不是最新的,所以你只能手动去官网下载,并且手动更新:

- 打开 [LayaAir Web](https://ldc.layabox.com/layadownload/?type=layaair-LayaAir%201.7.19.1%20beta) , and download new package
- 拷贝 `lib`, 覆盖你项目中的 `bin/libs`
- 完成!