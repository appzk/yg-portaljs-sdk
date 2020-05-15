import PubSub from 'pubsub-js'
  ;
  
const pubsubConfig = {
  say: function() {
    console.log('say ypjs');
    return this;
  },
  isDebug: false,
  debug: (bl) => {
    this.isDebug = bl;
  },
  theme: {
    'change': {title: '改变主题'},
  },
  add: function(a, b){
    return a + b;

  },
  subscribe: (subkey, options) => {
    PubSub.subscribe(subkey, function(arg, params) {
      
      this.isDebug && console.log(options, arg, params, subkey);
      !!options.success && options.success(params);
    });
  },
  publish: function(pubkey) {
    
    console.log( 'publis',pubkey);
    // PubSub.publishSync(pubkey, arg);
    return this;
  },
  addTab: function(arg) {
    this.publish('TAB-ADD',arg);
    return this;
  },
  onAddTab: (options) => {
    this.subscribe('TAB-ADD',options);
    return this;
  },
  onClearTab: function() {
    this.subscribe('TAB-CLEAR');
    return this;
  },
  clearTab:function(){
    this.publish('TAB-CLEAR')
    return this;
  },
  onRemoveTab: (key) => {
    this.subscribe('TAB-REMOVE',key);
    return this;
  },
  removeTab:function(arg){
    this.publish('TAB-REMOVE',arg)
    return this;
  },
  onRefreshTab: (key) => {
    this.subscribe('TAB-REFRESH',key);
    return this;
  },
  refreshTab:function(arg){
    this.publish('TAB-REFRESH',arg)
    return this;
  },
};
export {pubsubConfig};