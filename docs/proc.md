# 过程笔记

SDK开发过程笔记

## 增加devServer 

`"start": "cross-env webpack-dev-server --config webpack.dev.js",`
使用console来调试

## 增加hooks

commit hooks

## 分离文件并归类

index.js 作为入口

## 文件夹归类整理

```
```

## babel8出错
统一所有版本

`npm install -D babel-loader @babel/core @babel/preset-env webpack`

## 发版系列
`git cz`

`npm run prepublish`

` npm run release:patch`

`git push --follow-tags origin master && npm publish`

`npm run sync:tnpm`
