#!/usr/bin/env node

var fse = require('fs-extra');
var path = require('path');
var argv = process.argv.splice(2);
var package = require('./package.json');


console.log(' ');
console.log('init LayaAir...');
var outDir = path.resolve(process.cwd(), `./${argv[0]}`);

var files = [
  './bin',
  './src',
  './.gitignore',
  '.package.json',
  './LayaAir.d.ts',
  './parcel-plugin-change-file.js',
  './README.md',
  './READMECN.md',
  './.img',
];

var isLogFiles = false;
var isUseComp = false;

for (var i = 0, l = argv.length; i < l; i++) {
  const ele = argv[i];
  if (ele === '-l' || ele === '--log') {
    isLogFiles = true;
  }
  if (ele === '-c' || ele == '--comp') {
    isUseComp = true;
  }
  if (ele === '-v' || ele == '-version') {
    console.log(`version: ${package.version}`);
  }
}

if (!fse.existsSync(outDir)) {
  fse.mkdirSync(outDir);
}
if (isLogFiles) {
  console.log('target: ', outDir);
}
for (var i = 0, l = files.length; i < l; i++) {
  var ele = files[i];
  var theFilePath = path.resolve(__dirname, ele);
  var targetPath = path.resolve(outDir, ele);
  if (ele === './package.json') {
    targetPath = path.resolve(outDir, 'package.json');
  }
  if (ele === './src' && isUseComp === true) {
    theFilePath = path.resolve(__dirname, './src-comp');
  }
  if (isLogFiles) {
    console.log(theFilePath);
  }
  if (fse.existsSync(targetPath)) {
    console.log(`The ${outDir} is not empty!`);
    break;
  }
  if (fse.existsSync(theFilePath)) {
    fse.copySync(theFilePath, targetPath);
  }
}

fse.removeSync(path.resolve(outDir, './cli.js'));

console.log(' ');
console.log('Done! you can do:');
console.log('--------------------------------------------');
console.log(`cd in project:     cd ${argv[0]}`);
console.log(`install:           yarn install && yarn code`);
console.log(`make H5 Game:      yarn start`);
console.log(`make Wechat Game:  yarn wechat`);
console.log('--------------------------------------------');
console.log(' ');
