// 这里面存放的是 vuex 相关的核心代码
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import setting from './modules/setting'

// 插件安装
Vue.use(Vuex)

// 创建仓库 （空仓库）
const store = new Vuex.Store({
  // 开启严格模式
  strict: true,
  // 1.通过 state 可以提供数据 （所有组件共享的）
  state: {
    title: '仓库大标题',
    count: 100,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  // 定义mutations
  // 2.通过mutations 可以提供修改数据的方法
  mutations: {
    // 所有mutation函数，第一个参数,都是state
    // 注意点：mutation参数只能有一个，如果需要多个参数，可以包装成对象或数组。
    // addCount (state) {
    //   // 修改数据
    //   state.count += 1
    // },
    addCount (state, obj) {
      // console.log(obj);
      state.count += obj.count
    },
    subCount (state, n) {
      state.count -= n
    },
    changeCount (state, newCount) {
      state.count = newCount
    },
    changeTitle (state, newTitle) {
      state.title = newTitle
    }
  },

  // 3. actions处理异步，注意：不能直接操作 state, 操作state，还是需要 commit 到mutation
  actions: {
    // context 上下文(此处未分模块，可当成store仓库)
    // context.commit('mutaition名字', 额外参数)
    changeCountAction (context, num) {
      // 这里是setTimeout模拟异步,以后大部分场景是发送请求
      setTimeout(() => {
        context.commit('changeCount', num)
      }, 1000)
    }
  },
  // 4.getters 类似于计算属性
  getters: {
    // 注意点：
    // 1. 形参第一个参数就是state
    // 2.必须有返回值，返回值就是getters的值
    filterList (state) {
      return state.list.filter(item => item > 5)
    }
  },
  // 5.modules 模块
  modules: {
    user,
    setting
  }
})

// 导出给main.js使用
export default store
