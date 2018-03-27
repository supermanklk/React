# React
新的项目搭建模板,基于webpack上的react初始化模板搭建.配合react-router

使用说明:

主要用到仓库内的: src/ index.html packag.json package-lock-json postcss.config.js webpack.config.js

搭建环境: 

$ node -v  v9.2.0

$ npm -v   5.5.1

重置npm为淘宝源: $ npm config set registry https://registry.npm.taobao.org 

查看npm源 $ npm config get registry


搭建说明:

1.新建一个目录 React   $ mkdir React

2.进入目录 $ cd React 

3.初始化目录 $ cnpm init  (一路默认)

4.将React的package.json内的依赖拷贝到React下的package,json文件下.
```
{
  "name": "react",
  "version": "1.0.0",
  "description": "",
  "main": "root.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "", src/ index.html packag.json package-lock-json postcss.config.js webpack.config.js
  "license": "ISC",
    "devDependencies": {
    "antd": "^3.3.2",
    "antd-init": "^2.0.6",
    "autoprefixer": "^8.2.0",
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.4",
    "babel-plugin-react-html-attrs": "^2.1.0",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "babelify": "^8.0.0",
    "css-loader": "^0.28.11",
    "less-loader": "^4.1.0",
    "postcss-import": "^11.1.0",
    "postcss-loader": "^2.1.3",
    "prop-types": "^15.6.1",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-mixin": "^2.0.2",
    "react-router": "^2.8.1",
    "react-router-dom": "^4.2.2",
    "style-loader": "^0.20.3",
    "webpack": "^4.2.0",
    "webpack-cli": "^2.0.13"
  }
}
```
5.安装相关的依赖包 $ cnpm install

6.将文件src/ index.html package-lock-json postcss.config.js webpack.config.js拷贝到React目录下

7.确定package.json下的 "main": "index.js", 改为 "main": "root.js"  (root.js为入口文件)

8.在git命令下进入该React目录 执行命令 $webpck
9.运行React目录下index.html  页面出现 init 说明成功.
