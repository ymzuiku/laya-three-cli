const isDev = window['isDev'];
const plan = window['plan'];
const openFile = window['openFile'];
const dp = Laya.Browser.pixelRatio;
const iw = Laya.stage.width;
const ih = Laya.stage.height;

export let g = {
  isDev,
  plan,
  dp,
  iw,
  ih,
  openFile,
};
