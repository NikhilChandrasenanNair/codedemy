import Vue from 'vue'
import Router from 'vue-router'
import cryptoCurrency from '@/components/cryptoCurrency'
import currency from '@/components/currencyPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cryptoCurrency',
      component: cryptoCurrency
    },
    {
    	path: '/currencies/:currency',
    	name: 'currency',
    	component: currency
    }
  ]
})
