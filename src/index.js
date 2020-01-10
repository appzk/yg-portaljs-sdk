import cookie from 'react-cookies';

export function refresh() {
  const currWindow = isFrame ? parent.window : window;
  currWindow.location.reload();
}

export function goHome() {
  const currWindow = isFrame ? parent.window : window;
  window.location.href= "/";
}

export function logOut(){
  const expires = getExpires();
  return cookie.save('access_token', '', { path: '/', expires, maxAge: 1000});
}

export function add(a, b) {
  return a + b;
};

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

