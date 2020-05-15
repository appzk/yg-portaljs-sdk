import PubSub from 'pubsub-js'
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
    PubSub.subscribe(subkey, function(arg, params) {
      
      this.isDebug && console.log(options, arg, params, subkey);
      !!options.success && options.success(params);
    });
    return this;
  },
  publish: function(pubkey) {
    
    console.log( 'publis',pubkey);
    // PubSub.publishSync(pubkey, arg);
    return this;
  },
  addTab: function(arg) {
    this.publish(evtType.TAB_ADD,arg);
    return this;
  },
  onAddTab: function(options) {
    this.subscribe(evtType.TAB_ADD,options);
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
  onRemoveTab: function(key) {
    this.subscribe(evtType.TAB_REMOVE,key);
    return this;
  },
  removeTab:function(arg){
    this.publish(evtType.TAB_REMOVE,arg);
    return this;
  },
  onRefreshTab: function(key) {
    this.subscribe(evtType.TAB_REFRESH,key);
    return this;
  },
  refreshTab:function(arg){
    this.publish(evtType.TAB_REFRESH,arg);
    return this;
  },
  onHighLightMenu: function(key) {
    this.subscribe(evtType.MENU_HIGHLIGHT,key);
    return this;
  },
  highLightMenu:function(arg){
    this.publish(evtType.MENU_HIGHLIGHT,arg);
    return this;
  },
  // 
};