var VueTruncate = require('vue-truncate-filter')
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = true;

Vue.filter('snipper', value => {
  if (!value || typeof(value) != "string" ) return ''
  value = value.slice(0,70)
  return value;
});


Vue.use(VueTruncate)
new Vue({
  render: h => h(App),
}).$mount('#app')
