// import cookie from 'react-cookies';
// import {ypjs} from './ypjs';
import { message } from './message';
import {CD} from './cross-domain';

export function init( ypsdk ){
	window.ypsdk = ypsdk;
}

export function refresh() {
  const currWindow = isFrame ? parent.window : window;
  currWindow.location.reload();
}

export function goHome() {
  const currWindow = isFrame ? parent.window : window;
  currWindow.location.href= "/";
}

export function logOut(){
  const expires = getExpires();
  cookie.save('access_token', '', { path: '/', expires, maxAge: 1000});
  goHome();
}

// export function add(a, b) {
//   return a + b;
// };

export function isFrame(){
  return top.location !== self.location;
}

export function getExpires(){
  const expires = new Date();
  expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14);
  return expires;
}
export function setTheme(theme) {
  const expires = getExpires();
  return cookie.save('yg-theme', theme, { path: '/', expires, maxAge: 1000});
}

export function getThemeLink(currDocument){
  let styleLink = currDocument.getElementById('portal-style');
  if (!styleLink){
    styleLink = currDocument.createElement('link');
    styleLink.type = 'text/css';
    styleLink.rel = 'stylesheet';
    styleLink.id = 'portal-style';
    currDocument.body.append(styleLink);
  }
  return styleLink;
}

export function changeTheme(theme) {
  const currDocument = isFrame ? parent.document : document;
  const styleLink = getThemeLink(currDocument);
  let body = currDocument.getElementsByTagName('body')[0];
  styleLink.href = `/portal-${theme}.css`; // 切换组件主题
  styleLink.dataset.theme = theme;
  body.className = `skin-${theme}`; // 切换自定义组件的主题
  setTheme(theme);
}

export function show(str) {
  console.log(str);
  return show;
}

export function say(){
  return Reflect.apply(message.say,message,arguments);
}
export function addTab(){
  return Reflect.apply(message.addTab,message,arguments);
};
export function onAddTab(){
  return Reflect.apply(message.onAddTab,message,arguments);
};

export function add() {
  return Reflect.apply(message.add,message,arguments);
};

export function refreshTab(){
  return Reflect.apply(message.refreshTab,message,arguments);
};
export function onRefreshTab(){
  return Reflect.apply(message.onRefreshTab,message,arguments);
};

export function removeTab(){
  return Reflect.apply(message.removeTab,message,arguments);
};
export function onRemoveTab(){
  return Reflect.apply(message.onRemoveTab,message,arguments);
};

export function clearTab(){
  return Reflect.apply(message.clearTab,message,arguments);
};
export function onClearTab(){
  return Reflect.apply(message.onClearTab,message,arguments);
};
export function cross(){
  console.log('say cross');
  window.CD = new CD();
  window.CD.init();
  window.CD.listen();
}
// const ypsdk = {
//   refresh,
//   goHome,
//   logOut,
//   getExpires,
//   setTheme,
//   getThemeLink,
//   changeTheme,
//   say,
//   show,
//   isFrame,
//   addTab,
//   onAddTab,
//   add,
//   onRefreshTab,
//   refreshTab,
//   removeTab,
//   onRemoveTab,
//   clearTab,
//   onClearTab,
// }
