import PubSub from 'pubsub-js'
  ;
const pubsubConfig = {
  say: () => {
    console.log('say ypjs');
  },
  theme: {
    'change': {title: '改变主题'},
  },
  add: (a, b) =>{
    return a + b;
  },
  addTab: (arg, ...params) => {
    // arg is array
    console.log(arg, params, 1111);
    PubSub.publishSync('TAB-ADD', arg);
  },
  onAddTab: (options) => {
    PubSub.subscribe('TAB-ADD', function(arg, params) {
      console.log(options, arg, params, 1111);
      !!options.success && options.success(params);
    });
  },
};
export {pubsubConfig};