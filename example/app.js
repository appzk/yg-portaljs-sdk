import * as ypsdk from '../src/index';

let index = 1;
function test(){
  console.log('加载sdk');
  // console.log(ypsdk.add(1, 2));
  console.log(ypsdk,111);
  ypsdk.say();
  const newTab = {
    title: `名称啊-${index}`,
    content: `名称啊-${index}`,
    key: `tab-${index}`,
    urlpath: `https://www.baidu.com?${index}`,
  } ;
  ypsdk.show(123)(456);
  ypsdk.addTab(newTab).say();
  ypsdk.refreshTab('abc').say();
  ypsdk.removeTab('aa').say();
  ypsdk.clearTab().say();

  ypsdk.cross();
  console.log(`isIframe=${ypsdk.isFrame()}`);
  console.log('执行完成sdk');

  console.log(ypsdk.say() === ypsdk.addTab(newTab));
  console.log(ypsdk.addTab(newTab));
}
test();