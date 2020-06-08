import PubSub from './pubsub'
  ;
// event-types.js

import * as evtType from './event-types';

function isFrame(){
  return top.location !== self.location;
}

export const message = {
  say: function() {
    console.log('say ypjs');
    return this;
  },
  isDebug: false,
  debug: function(bl)  {
    this.isDebug = bl;
  },
  theme: {
    'change': {title: '改变主题'},
  },
  add: function(a, b){
    return a + b;

  },
  subscribe: function(subkey, options) {
    const that = this;
    PubSub.subscribe(subkey, function(arg, params) {
      
      that.isDebug && console.log(options, arg, params, subkey);
      !!options.success && options.success(params);
    });
    return this;
  },
  publish: function(pubkey,arg) {
    
    // console.log( arg,pubkey);
    PubSub.publishSync(pubkey, arg);
    return this;
  },
  addTab: function(arg) {
    // console.log(isFrame(),'=isFrame');
    isFrame() ? window.ypsdk.addTab(arg) : this.publish(evtType.MsgType.TAB_ADD,arg) ;
  
    // this.publish(evtType.MsgType.TAB_ADD,arg);
    return this;
  },
  onAddTab: function(options) {
    this.subscribe(evtType.MsgType.TAB_ADD,options);
    return this;
  },
  onClearTab: function(options) {
    this.subscribe(evtType.MsgType.TAB_CLEAR,options);
    return this;
  },
  clearTab:function(){
    isFrame() ? window.ypsdk.clearTab() : this.publish(evtType.MsgType.TAB_CLEAR) ;
    return this;
  },
  onRemoveTab: function(options) {
    this.subscribe(evtType.MsgType.TAB_REMOVE,options);
    return this;
  },
  removeTab:function(arg){
    isFrame() ? window.ypsdk.removeTab(arg) : this.publish(evtType.MsgType.TAB_REMOVE,arg) ;
    return this;
  },
  onRefreshTab: function(options) {
    this.subscribe(evtType.MsgType.TAB_REFRESH,options);
    return this;
  },
  refreshTab:function(arg){
    this.publish(evtType.MsgType.TAB_REFRESH,arg);
    return this;
  },
  onHighLightMenu: function(options) {
    this.subscribe(evtType.MsgType.MENU_HIGHLIGHT,options);
    return this;
  },
  highLightMenu:function(arg){
    isFrame() ? window.ypsdk.highLightMenu(arg) : this.publish(evtType.MsgType.MENU_HIGHLIGHT,arg) ;
    return this;
  },
  onTitleTab: function(options) {
    this.subscribe(evtType.MsgType.TAB_TITLE,options);
    return this;
  },
  titleTab:function(arg){
    this.publish(evtType.MsgType.TAB_TITLE,arg);
    return this;
  },
  onRouterChange: function(options) {
    // console.log(isFrame(),window.ypsdk,options,'=routerChange isFrame');
    const {isIframe,...restOpt} = options;
    // console.log(isFrame(), options.isIframe,restOpt,options,top.location , self.location);
    isFrame() && options.isIframe ? window.ypsdk.onRouterChange(restOpt) : this.subscribe(evtType.MsgType.ROUTER_CHANGE,options);;
    
    
    return this;
  },
  routerChange:function(arg){
    this.publish(evtType.MsgType.ROUTER_CHANGE,arg);
    return this;
  },
  onHideTabs: function(options) {
    this.subscribe(evtType.MsgType.TABS_HIDE,options);
    return this;
  },
  hideTabs:function(arg){
    this.publish(evtType.MsgType.TABS_HIDE,arg);
    return this;
  },
  onUpdateLogo: function(options) {
    this.subscribe(evtType.MsgType.LOGO_UPDATE,options);
    return this;
  },
  updateLogo:function(arg){
    this.publish(evtType.MsgType.LOGO_UPDATE,arg);
    return this;
  },
  // 
};