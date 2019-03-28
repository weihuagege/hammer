<template>
  <div id="app">
    <router-view/>
    <vue-loading type="beat" class="loading" v-show="isload">
    </vue-loading>
  </div>
</template>
<script>
  import Axios from 'axios'
  import {VueLoading} from 'vue-loading-template'
export default {
    //注册组件
  components:{
    VueLoading
  },
  data(){
    return{
      isload:true
    }
  },
created() {
    //请求拦截器
    Axios.interceptors.response.use((response)=>{
      this.isload=false
      return response
      //在发送请求该做什么
    },error => {
      return Promise.reject(error)
    })
  Axios.interceptors.request.use((config)=>{
    this.isload=true
    return config
  },error => {
    return Promise.reject(error)
  })
}
}
</script>
<style>
@import "assets/css/index.css";
@import "layui/css/layui.css";
  @import "bootstrap-3.3.7-dist/css/bootstrap.css";
  .loading{
    position: fixed;
    top: 50%;
    left: 50%;

  }
</style>
