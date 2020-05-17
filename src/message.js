import PubSub from './pubsub'
  ;
import pm from './postmsg';

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
  subscribe: function(subkey, arg) {
    const that = this;

    if (!!arg && !!arg.ifrname){
      /**
       * callback: ƒ callback()
        data: {a: 1, b: "a↵b↵c"} 传递数据
        origin: "http://static.ygego.f.me" 来源页面
        source:
      */
     console.log(arg,'arg');
      pm.bind(subkey, function (params) {
        console.log('页面订阅收到的参数', params);
        !!arg.success && arg.success(params);// 订阅的成功回调

        setTimeout(function () {
          !!params.callback && params.callback(params);// 发布的回调
            // params.callback('callback');
            pm.send(subkey, window.parent, {bbb: 123}); // 向父窗体传递
        }, 1000);
  
        setInterval(function () {
            pm.send('testb-once', window.parent, {bbb: 3333});// 向父窗体传递
        }, 1000);
      });
    }
    else{
      PubSub.subscribe(subkey, function(arg, params) {
      
        that.isDebug && console.log(options, arg, params, subkey);
        !!arg.success && arg.success(params);
      });
      
    }
    

    
    return this;
  },
  publish: function(pubkey,arg) {
    
    console.log( arg,pubkey);
    if (!!arg && (!!arg.ifrname || arg.fromorigin)){
      var wina = document.getElementById(arg.ifrname); // 'wina'
      const success = arg.success;
      pm.send(
        pubkey,
        !!arg.ifrname? wina.contentWindow : arg.fromorigin,
          // {a: 1, b: "a\nb\nc"},
          arg,
          {
            callback: success || function () {
              console.log('success callback', arguments);
          }
              // callback: function () {
              //     console.log('callback', arguments);
              // }
          }
      );
    }
    else{
    PubSub.publishSync(pubkey, arg);
      
    }  
    return this;
  },
  addTab: function(arg) {
    this.publish(evtType.MsgType.TAB_ADD,arg);
    // // window.CD = new CD();
  // window.CD.init();
  // window.CD.listen();
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