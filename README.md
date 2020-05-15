# Yg Portal SDK



## 安装
> npm install yg-portaljs-sdk


## 使用

es6 

逐一指定要加载的方法

```
import { changeTheme, refresh } from './yg-portaljs-sdk';

```
整体加载的写法如下。
```
import * as ypsdk from 'yg-portaljs-sdk';

ypsdk.changeTheme('techblue')
```
script tag
```
window.ypsdk.changeTheme('techblue');
```
amd

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.2/require.min.js"></script>
<script>
  window.requirejs(['yg-portaljs-sdk'], function(ypsdk) {
    console.log(ypsdk.add(1, 2));
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

触发
```
const newTab = {
      title: `名称啊-${this.index}`,
      content: `名称啊-${this.index}`,
      key: `tab-${this.index}`,
      urlpath: `https://www.baidu.com?${this.index}`,
    } ;
ypsdk.addTab(newTab);  


```
监听
```
ypsdk.onAddTab({success: this.onAddTab});
```

