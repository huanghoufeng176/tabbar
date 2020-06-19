import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
// import { request } from './network/request'
// import { set } from 'vue/types/umd'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// axios.defaults.baseURL='http://152.136.185.210:8000/api/n3'
// axios.defaults.baseURL='http://152.136.185.210:8000/api/n3'
// axios.defaults.baseURL='http://152.136.185.210:8000/api/n3'

// axios({
//   baseURL:'http://152.136.185.210:8000/api/n3',
//   url:'/home/multidata',
//   method:'get'
// }).then(res=>{
//   console.log(res)
// })

// axios({
//   url:'http://152.136.185.210:8000/api/n3/home/data?type=sell&page=3'
// }).then(res=>{
//   console.log(res)
// })

// axios({
//   url:'http://152.136.185.210:8000/api/n3/home/data',
//   params:{
//     type:'pop',
//     page:3
//   }
// }).then(res=>{
//   console.log(res)
// })

// axios({
//   url:'http://152.136.185.210:8000/api/n3/home/data',
//   params:{
//     type:'sell',
//     page:3
//   }
// }).then(res=>{
//   console.log(res)
// })

// axios.all([
//   axios({
//     url:'http://152.136.185.210:8000/api/n3/home/multidata'
//   }),
//   axios({
//     url:'http://152.136.185.210:8000/api/n3/home/data',
//     params:{
//       type:'sell',
//       page:3
//     }
//   })
// ]).then(res=>{
//   console.log(res)
// })

// axios.all([
//   axios({
//     url:'home/multidata'
//   }),
//   axios({
//     url:'home/data',
//     params:{
//       type:'sell',
//       page:3
//     }
//   })
// ])

// axios({
//   url:'/category'
// }).then(res=>{
//   console.log(res)
// })

// const instance1=axios.create({
//   baseURL:'http://152.136.185.210:8000/api/n3',
// })
// instance1({
//   url:'/home/multidata'
// }).then(res=>{
//   console.log(res)
// })
// const instance1=axios.create({
//   baseURL:'http://152.136.185.210:8000/api/n3',
//   timeout:5000
// })

// instance1({
//   url:'/home/category'
// }).then(function(res) {
//   console.log(res)
// })
// instance1({
//   url:'/home/multidata'
// }).then(res=>{
//   console.log(res)
// })

// instance1({
//   url:'/home/multidata'
// }).then(function(res) {
//   console.log(res)
// })

import {request} from './network/request'

request({
  url:'/home/multidata'
})