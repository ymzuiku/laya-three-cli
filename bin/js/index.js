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
Laya.ResourceVersion.enable('version.json', Laya.Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
function beginLoad() {
    // 加载资源
    Laya.loader.load('res/atlas/comp.atlas', Laya.Handler.create(null, onLoaded));
}
function onLoaded() {
    //实例项目
    new Main();
}
var Main = /** @class */ (function () {
    function Main() {
        var label = new Laya.Text();
        label.text = 'Hello LayaAir';
        label.color = '#000';
        label.pos(300, 500);
        label.fontSize = 50;
        Laya.stage.addChild(label);
    }
    return Main;
}());
//# sourceMappingURL=index.js.map