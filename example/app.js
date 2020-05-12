import * as yp from '../src/index';


function test(){
  console.log('加载sdk');
  console.log(yp.add(1, 2));
  yp.say();
  console.log(`isIframe=${yp.isFrame()}`);
  console.log('执行完成sdk');
  
}
test();