<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值:<label>{{count}}</label>
    <br />
    <button @click="subCount(1)">值 - 1</button>
    <button @click="subCount(5)">值 - 5</button>
    <button @click="subCount(10)">值 - 10</button>
    <button @click="changeTitle('前端程序员')">改标题</button>
    <button @click="changeCountAction(888)">一秒后修改成888</button>
    <hr>
    <div>{{ filterList }}</div>

    <hr>
    <!-- 测试访问模块中的state - mapState辅助函数映射 -->
    <div>{{ user.userInfo.name }}</div>
    <div>{{ setting.theme }}</div>

    <!-- 访问模块中的state -->
    <div>user模块的数据：{{ userInfo.name }}</div>
    <button @click="setUser({ name:'xiaoli',age:19 })">更新个人信息</button>
    <button @click="setUserSecond({ name:'linlin',age:26 })">一秒后更新信息</button>
    <div>setting模块的数据：{{ theme }} - {{desc}}</div>
    <button @click="setTheme('skyblue')">更新主题</button>

    <hr>
    <!-- 访问模块中的getters -->
    <div>{{ UpperCaseName }}</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Son2Com',
  methods: {
    // mapMutations、mapActions 都是映射方法的
    // 全局级别的映射
    // handleSub (n) {
    //   this.$store.commit('subCount', n)
    // }
    ...mapMutations(['subCount', 'changeTitle']),
    // handleSub (n) {
    //   this.subCount(n)
    // }
    // 也可以直接调用

    ...mapActions(['changeCountAction']),

    // 分模块的映射
    ...mapMutations('setting', ['setTheme']),
    ...mapMutations('user', ['setUser']),

    ...mapActions('user', ['setUserSecond'])
  },
  computed: {
    // mapState、mapGetters都是映射属性
    ...mapState(['count', 'title', 'user', 'setting']),
    // 映射modules模块里面的user中的userInfo属性
    ...mapState('user', ['userInfo']),
    ...mapState('setting', ['theme', 'desc']),

    ...mapGetters(['filterList']),
    ...mapGetters('user', ['UpperCaseName'])
  }
}
</script>

<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
