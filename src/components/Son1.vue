<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: <label>{{$store.state.count}}</label>
    <br>
    <button @click="handleAdd(1)">值 + 1</button>
    <button @click="handleAdd(5)">值 + 5</button>
    <button @click="handleAdd(10)">值 + 10</button>
    <button @click="changFn">改标题</button>
    <button @click="handleChange">一秒后修改成666</button>

    <hr>
    <div>{{ $store.state.list }}</div>
    <div>{{ $store.getters.filterList }}</div>

    <hr>
    <!-- 测试访问模块中的state - 原生 -->
    <div>{{ $store.state.user.userInfo.name}}</div>
    <button @click="updateUser">更新个人信息</button>
    <button @click="updateUser2">一秒后更新信息</button>

    <div>{{ $store.state.setting.theme}}</div>
    <button @click="updateTheme">更新主题色</button>
    <button @click="updateTheme2">一秒后更新主题色</button>

    <hr>
    <!-- 测试访问模块中的getters - 原生 -->
    <!-- 直接通过模块名访问getters -> $store.getters['模块名/xxx'] -->
    <div>{{ $store.getters['user/UpperCaseName'] }}</div>
  </div>
</template>

<script>
export default {
  name: 'Son1Com',
  created () {
    console.log(this.$store.getters)
  },
  methods: {
    updateUser () {
      // this.$store.commit('模块名/xxx',额外传参有且只有一个)
      this.$store.commit('user/setUser', {
        name: 'zhangsna',
        age: 30
      })
    },
    updateUser2 () {
      this.$store.dispatch('user/setUserSecond', {
        name: 'xiaohong',
        age: 28
      })
    },
    updateTheme () {
      this.$store.commit('setting/setTheme', 'pink')
    },
    updateTheme2 () {
      this.$store.dispatch('setting/setThemeSecond', 'red')
    },
    handleAdd (n) {
      // 错误代码（vue中默认不会检测，检测需要成本）
      // this.$store.state.count++
      // console.log(this.$store.state.count)

      // 应该通过mutation 核心概念，进行修改数据.commit提交
      // 需要提交调用mutation
      // this.$store.commit('addCount')
      // console.log(n)
      // 调用带参数的mutation函数
      // 传多个数据用对象或者数组格式
      this.$store.commit('addCount', {
        count: n,
        msg: '哈哈'
      })
    },
    addFive () {
      this.$store.commit('addFive')
    },
    // changFn () {
    //   this.$store.commit('changeTitle')
    // }
    changFn () {
      this.$store.commit('changeTitle', '熊猫程序员')
    },
    handleChange () {
      // 调用action
      // this.$store.dispatch('action名字',额外参数)
      this.$store.dispatch('changeCountAction', 666)
    }
  }
}
</script>

<style lang="css" scoped>
.box{
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
