// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 导入bootstrap-vue, 兼容bootstrap
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// 导入jquery
import $ from 'jquery'

// import vuex
import Vuex from 'vuex'

Vue.use(Vuex)

 // register vuex component
const store = new Vuex.Store({
  state: {
    noteList:[]
  },
  mutations: {
    // 这里创建事件方法, 但是mutation是同步的，所以需要把耗时的请求放在actions中去，action是异步的，mutation只需要执行数据更改就行了
    // 这里getNoteList 其实应该放在action中，但是为了演示下mutation也可以做这种请求，就暂时放在这里，对比下面的createNewNote
    getNoteList(state){
      $.ajax({
        url: 'http://127.0.0.1:8000/api/note/',
        type: 'get',
        success: function(data) {
          state.noteList = data
        }
      })
    },
      createNewNote(state, data){
        store.state.noteList.push(data)
      }
  },
  actions:{
    createNewNote_action(context, json_data){
      // send requset in get or post with axios

      // axios.get("http://citi.hoertlehner.com:8821/api/apartements")
      //   .then(function(data) {
      //     console.log("PERFECt.. all ok!");
      //     console.log("number of apartements: " + data.length);
      //     console.log(data);
      //   })
      //   .catch(function(err) {
      //     console.log("ERR");
      //     console.log(err);
      //   })
      $.ajax({
        url:'http://localhost:8000/api/note/',
        type:'post',
        data:json_data,
        success:function (data) {
          // 这里使用action来提交mutation，耗时的ajax放在action中，可以异步执行，等有结果了在执行同步的mutation中的方法
          context.commit("createNewNote", data)
        }
      })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  // 这里面的变量，其他地方只要用 $变量名 的方式就可以访问
  el: '#app',
  router,
  // store from vuex
  store,
  components: { App },
  template: '<App/>'
})


