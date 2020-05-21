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
| onAddTab | 监听tab | 无 |
| addTab | 添加tab | 无 |
| onHighLightMenu | 监听菜单高亮 | 无 |
| highLightMenu | 菜单高亮 | 无 |
| onTitleTab | 监听tabTitle变化 | 无 |
| titleTab | 设置tabTitle | 无 |
| onRouterChange | 监听RouterChange | 无 |
| routerChange | 设置router change | 无 |

路由、tab 统一 参数
``` 
const newTab = {
      title: `名称啊-${this.index}`,
      content: `名称啊-${this.index}`,
      key: `tab-${this.index}`,
      urlpath: `https://www.baidu.com?${this.index}`,
    } ;
```


触发
```
ypsdk.addTab(newTab);  
```
监听
```
ypsdk.onAddTab({success: this.onAddTab});
```

菜单高亮 门户用
```
ypsdk.onHighLightMenu(key);
```
子应用使用

```
const menuOptions = {
    menuSelectedKeys: ['100000000000000068'],
    menuOpenKeys: ['100000000000000047', '100000000000000004', '100000000000000068'],
  };
ypsdk.highLightMenu(menuOptions);

```

路由变化
```
ypsdk.onRouterChange({success:function(){
    console.log('this is router subscribe success.',arguments);
}});

  
ypsdk.routerChange(newTab);
```

``` iframe 内 引用js
https://cdn.jsdelivr.net/npm/yg-portaljs-sdk@1.0.14/lib/ypsdk.min.js
```
``` iframe 内 didMound
window.setTimeout(() => {
      ypsdk.onRouterChange({
        isIframe: true,
        success: function() {
          console.log('this is componentDidMount router subscribe success.', arguments);
        }});  
    }, 300);
```

```iframe 内 
highLightMenu = () => {
    const menuOptions = {
      menuSelectedKeys: ['100000000000000068'],
      menuOpenKeys: ['100000000000000047', '100000000000000004', '100000000000000068'],
    };
    ypsdk.highLightMenu(menuOptions);
  }
```
## 通过CDN访问

jsdelivr

地址格式为：

https://cdn.jsdelivr.net/npm/(your packagename)@(version)/(file)

https://cdn.jsdelivr.net/npm/yg-portaljs-sdk@1.0.12/lib/ypsdk.min.js

unpkg.com

地址格式为：
example

https://www.unpkg.com/yg-portaljs-sdk@1.0.12/lib/ypsdk.min.js

https://www.unpkg.com/:package@:version/:file


