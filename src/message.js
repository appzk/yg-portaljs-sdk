import PubSub from './pubsub'
  ;
// event-types.js

import * as evtType from './event-types';

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
    
    console.log( arg,pubkey);
    PubSub.publishSync(pubkey, arg);
    return this;
  },
  addTab: function(arg) {
    this.publish(evtType.MsgType.TAB_ADD,arg);
    return this;
  },
  onAddTab: function(options) {
    this.subscribe(evtType.MsgType.TAB_ADD,options);
    return this;
  },
  onClearTab: function() {
    this.subscribe(evtType.TAB_CLEAR);
    return this;
  },
  clearTab:function(){
    this.publish(evtType.TAB_CLEAR)
    return this;
  },
  onRemoveTab: function(options) {
    this.subscribe(evtType.TAB_REMOVE,options);
    return this;
  },
  removeTab:function(arg){
    this.publish(evtType.TAB_REMOVE,arg);
    return this;
  },
  onRefreshTab: function(options) {
    this.subscribe(evtType.TAB_REFRESH,options);
    return this;
  },
  refreshTab:function(arg){
    this.publish(evtType.TAB_REFRESH,arg);
    return this;
  },
  onHighLightMenu: function(options) {
    this.subscribe(evtType.MsgType.MENU_HIGHLIGHT,options);
    return this;
  },
  highLightMenu:function(arg){
    this.publish(evtType.MsgType.MENU_HIGHLIGHT,arg);
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
    this.subscribe(evtType.MsgType.ROUTER_CHANGE,options);
    return this;
  },
  routerChange:function(arg){
    this.publish(evtType.MsgType.ROUTER_CHANGE,arg);
    return this;
  },
  
  // 
};