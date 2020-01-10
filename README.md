# Yg Portal SDK

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]


## 安装
> npm install yg-portal-sdk


## 使用

es6 

逐一指定要加载的方法

```
import { changeTheme, refresh } from './yg-portal-sdk';

```
整体加载的写法如下。
```
import * as yp from 'yg-portal-sdk';

yp.changeTheme('techblue')
```
script tag
```
window.yp.changeTheme('techblue');
```
amd

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.2/require.min.js"></script>
<script>
  window.requirejs(['yg-portal-sdk'], function(yp) {
    console.log(yp(1, 2));
  });
</script>
```

## Demo：
- [SDK 配置]

| 函数 | 说明 | 参数 |
| :-----| ----: | :----: |
| changeTheme | 改变主题 | (string:  'techblue','sunorange','dark') |
| refresh | 刷新 | 无 |
| goHome | 回到主页 | 无 |
| logOut | 退出 | 无 |


