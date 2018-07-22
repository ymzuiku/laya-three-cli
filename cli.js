const fse = require('fs-extra');
const path = require('path');
const args = process.argv.splice(2);

console.log(' ');
console.log('init LayaAir...');
const outDir = path.resolve(process.cwd(), `./${args[0]}`);

const files = [
  './bin',
  './src',
  './.gitignore',
  './LayaAir.d.ts',
  './package.json',
  './parcel-plugin-change-file.js',
  './README.md',
  './READMECN.md',
  './.img',
];

let isLogFiles = false;

for (let i = 0, l = args.length; i < l; i++) {
  const ele = args[i];
  if (ele === '-l') {
    isLogFiles = true;
  }
}

if (!fse.existsSync(outDir)) {
  fse.mkdirSync(outDir);
}
if (isLogFiles) {
  console.log('target: ', outDir);
}
for (let i = 0, l = files.length; i < l; i++) {
  const ele = files[i];
  const theFilePath = path.resolve(__dirname, ele);
  const targetPath = path.resolve(outDir, ele);
  if (isLogFiles) {
    console.log(theFilePath);
  }
  if (fse.existsSync(targetPath)) {
    console.log(`The ${outDir} is not empty!`);
    break;
  }
  if (fse.existsSync(theFilePath)){
    fse.copySync(theFilePath, targetPath);
  }
}

fse.removeSync(path.resolve(outDir, './cli.js'));

console.log(' ');
console.log('Done! you can do:');
console.log('--------------------------------------------');
console.log(`cd in project:     cd ${args[0]}`);
console.log(`install:           yarn install && yarn code`);
console.log(`make H5 Game:      yarn start`);
console.log(`make Wechat Game:  yarn wechat`);
console.log('--------------------------------------------');
console.log(' ');

