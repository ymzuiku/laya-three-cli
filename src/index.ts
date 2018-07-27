/// <reference path="../LayaAir.d.ts"/>

//初始化微信小游戏
Laya.MiniAdpter.init();
//程序入口
Laya.init(1080, 1920, Laya.WebGL);
Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_HEIGHT;
Laya.stage.screenMode = 'vertical';
Laya.stage.bgColor = '#f4f4f5';
if (window['isDev']) {
  Laya.Stat.show(20, 20);
  Laya.stage.destroyChildren();
}

//激活资源版本控制
Laya.ResourceVersion.enable(
  'version.json',
  Laya.Handler.create(null, beginLoad),
  Laya.ResourceVersion.FILENAME_VERSION,
);

import * as Routers from './Routers';

function beginLoad() {
  // 加载资源
  Laya.loader.load('res/atlas/comp.atlas', Laya.Handler.create(null, onLoaded));
}

function onLoaded(): void {
  //实例项目
  new Routers.Main(Laya.stage);
}