<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/mobile">Mobile</router-link>
    </div>
    <router-view/>
    <!-- 防止页面内容被tabbar遮挡 -->
    <div style="height: 3rem;"></div>
    <van-tabbar v-model="active" route border @change="onChange" fixed>
        <van-tabbar-item icon="home-o" to="/mobile">首页</van-tabbar-item>
        <van-tabbar-item icon="apps-o" to="/">分类</van-tabbar-item>
        <van-tabbar-item icon="underway-o" badge="12" to="/check_in">签到</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="user-o" to="/about">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
        };
    },
    methods: {
      onChange(index) {
        // Notify({ type: 'primary', message: index });
        // console.log(index)
      },
    },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-color: lightgray; */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
