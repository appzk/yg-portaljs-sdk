import * as yp from '../src/index';

let index = 1;
function test(){
  console.log('加载sdk');
  // console.log(yp.add(1, 2));
  yp.say();
  const newTab = {
    title: `名称啊-${index}`,
    content: `名称啊-${index}`,
    key: `tab-${index}`,
    urlpath: `https://www.baidu.com?${index}`,
  } ;
  yp.show(123)(456);
  yp.addTab(newTab).say();
  yp.refreshTab('abc').say();
  yp.removeTab('aa').say();
  yp.clearTab().say();
  console.log(`isIframe=${yp.isFrame()}`);
  console.log('执行完成sdk');

  console.log(yp.say() === yp.addTab(newTab));
  console.log(yp.addTab(newTab));
}
test();