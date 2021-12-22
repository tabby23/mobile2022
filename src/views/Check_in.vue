<template>
  <div>
    <h1>这是签到页面</h1>
    <div>
      <van-field v-model="name" label="用户名" placeholder="请输入用户名"></van-field>
    </div>
    <van-button type="info" @click="onCheckIn">签到</van-button>&nbsp;&nbsp;
    <van-button type="info" @click="onDelUser">删除</van-button>&nbsp;&nbsp;
    <van-button type="info" @click="onPutUser">修改</van-button>&nbsp;&nbsp;
    <van-button type="info" @click="onGetFruits">获取水果列表</van-button>
    <div style="margin: 10px;">
      {{info}}
    </div>
  </div>
</template>
<script>
//const axios = require('axios')
export default {
  data() {
    return {
      info: null,
      name: ""
    }
  },
  methods: {
    onCheckIn: function() {
      console.log("hello")
      this.$axios.get('http://127.0.0.1:8082/v1/user/2').then(
        response => {
          console.log(response.data)
          this.info = response.data
        }
      )
    },
    onDelUser: function() {
      this.$axios.delete('http://127.0.0.1:8082/v1/user/2').then(
        response => {
          console.log(response.data)
          this.info = response.data
        }
      )
    },
    onPutUser: function() {
      // 常量的写法
      // this.$axios.put('http://127.0.0.1:8082/v1/user/2',{name:'jack',age:23}).then(
      // 变量的写法
      this.$axios.put('http://127.0.0.1:8082/v1/user/2',{name:`${this.name}`,age:23}).then(
        response => {
          console.log(response.data)
          this.info = response.data
        }
      )
    },
    onGetFruits: function() {
      this.$axios.get('http://127.0.0.1:8888/v1/getFruits').then(
        response => {
          console.log(response.data)
          this.info = response.data
        }
      )
    }
  }
}
</script>
