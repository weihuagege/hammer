<template>
    <div class="box">
      <div class="gou" :class={xianShi:isblock}>
        <div style="display: flex;background-color: white;margin-top: 10px;
border-bottom: 1px solid gainsboro;" v-for="(item,index) in getlist" :key="index">
          <div class="le" style="width: 50px;height: 50px;border: 1px solid black;">
            <img :src="item.ali_image" alt="">
          </div>
          <div class="rt">
            <p>{{item.title}}</p>
            <p style="color: gainsboro">{{item.spec_json.show_name}}</p>
            <p style="color: red">￥{{item.price}}.00</p>
          </div>
        </div>
        <div style="width: 100%;height: 70px;margin-top: 35px;
        display: flex;justify-content: space-between;color: white;background-color: whitesmoke">
          <div style="margin-top: 10px">
            <p style="color: black">共{{gettotalnum}}件商品</p>
            <p style="color: black">合计<span style="color: red">￥{{gettotalmoney}}</span></p>
          </div>
          <button class="btn btn-info" style="width: 70px;height: 30px;margin-top: 15px;text-align: center;">
            <router-link to="ShopCar">
              去购物车
            </router-link>
          </button>
        </div>
      </div>
      <header>
        <div class="logo">
          <img src="../img/2019-03-15_164224.png" alt="">
        </div>
        <div class="list">
          <ul>
            <li>在线商城</li>
            <li>坚果Pro</li>
            <li>Smartisan M1/M1L</li>
            <li>Smartisan OS</li>
            <li>欢喜云</li>
            <li>应用下载</li>
            <li>官方论坛</li>
            <li>|</li>
          </ul>
        </div>
        <div class="action">
          <div>
            <router-link to="User">
              <img src="../img/2019-03-15_165002.png" alt="">
            </router-link>
          </div>
          <div @click="show">
            <img src="../img/2019-03-15_165014.png" alt="">
          </div>
        </div>
      </header>
      <div class="first">
        <div class="one">
          <ul>
            <li>首页</li>
            <li>·</li>
            <li>手机</li>
            <li>·</li>
            <li>“足迹系列”手感膜</li>
            <li>·</li>
            <li>
              <router-link to="/">
                官方配件
              </router-link>
            </li>
            <li>·</li>
            <li>周边产品</li>
            <li>·</li>
            <li>第三方配件</li>
            <li>·</li>
            <li>全部商品</li>
            <li>·</li>
            <li>服务</li>
          </ul>
        </div>
      </div>
      <div class="second">
<div class="one">
  支付订单
</div>
        <div class="two">
          <p style="color: white">312321312312</p>
          <p style="font-size: 30px">
            提交订单成功
          </p>
          <p>
            请在<span style="color: red">24 小时</span> 内完成支付，超时订单将自动取消。
          </p>
          <p>
            我们将在您完成支付后的 72 小时内发货
          </p>
        </div>
        <div class="three">
          <p style="margin-left: 550px;margin-top: 33px">应付金额:</p>
          <p style="color: red;font-size: 20px;margin-top: 30px">￥{{gettotalmoney}}.00</p>
          <button class="btn btn-info" @click="alert">
            <router-link to="User" >
              现在支付
            </router-link>
          </button>
        </div>
      </div>
      <div class="third">
        <p>订单编号</p>
        <p>1553234267294</p>
      </div>
      <div class="four">
        <p>收货信息</p>
        <p>姓名：熊大</p>
        <p>联系电话：13811111111</p>
        <p>详细地址：北京市 市辖区 昌平区 顺沙路马池口镇吉利大学</p>
      </div>
      <div class="four">
        <p>发票信息</p>
        <p>发票类型：电子发票</p>
        <p>发票抬头：个人</p>
        <p>发票内容：购买商品明细</p>
      </div>
      <div class="five">
        <p style="margin-left: 60px">商品信息</p>
        <p style="margin-left: 400px">单价</p>
        <p>数量</p>
        <p>小计</p>
      </div>
      <div class="six" v-for="(item,index) in getlist" :key="index">
        <p style="margin-left: 60px;width: 200px;">{{item.title}}</p>
        <p style="margin-left: 240px">¥ {{item.price}}.00</p>
        <p>5</p>
        <p> ¥ 245.00</p>
      </div>
      <div class="seven">
        <p>商品总计： ¥ {{gettotalmoney}}</p>
        <p>运费： + ¥ 0.00</p>
      </div>
    </div>
</template>

<script>

    export default {
      data(){
        return{
          isblock:false
        }
      },
methods:{
  alert(){
    alert('支付成功')
  },
  show(){
    this.isblock=true
  }
},
      computed:{
        getlist(){
          return   this.$store.state.ShopList
        },
        gettotalmoney(){
          return this.$store.getters.totalmoney
        },
        gettotalnum(){
          return this.$store.getters.totalnum
        }
      }
    }
</script>

<style scoped lang="scss">
  a{
    color: white;
    text-decoration: none;
  }
  .box{
    width: 100%;
    height: 1600px;
    background-color: whitesmoke;
  }
  .gou{
    background-color: white;
    width: 260px;
    /*height: 200px;*/
    display: none;
    /*background-color: yellow;*/
    position: absolute;
    border: 1px solid black;
    top: 100px;
    right: 50px;
    z-index: 10;
    .le{
      width: 70px;
      height: 60px;
      img{
        width: 100%;
        height: 90%;
      }
    }
    .rt{
      margin-left: 10px;
      font-size: 12px;
    }
  }
  .xianShi{
    display: block;
  }
  header{
    width: 100%;
    height: 90px;
    background-color: #0C0C0C;
    display: flex;
    justify-content: space-around;
  }
  .logo{
    width: 50px;
    height: 50px;
    margin-top: 20px;
    img{
      width: 100%;
      height:100% ;
    }
  }
  .list{
    width: 700px;
    height: 100%;
    line-height: 90px;
    ul{
      display: flex;
      justify-content: space-between;
      list-style: none;
      color: white;
      font-size: 13px;
    }
  }
  .action{
    width: 150px;
    height: 100%;
    display: flex;
    line-height: 90px;
    div{
      width: 30px;
      height: 30px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .first{
    width: 100%;
    height: 100px;
    background-color: gainsboro;
    .one{
      width: 90%;
      height: 60%;
      margin: 0 auto;
      line-height: 90px;
      ul{
        display: flex;
        list-style: none;
        font-size: 12px;
      }
      li{
        margin-left: 20px;
      }
    }
  }
  .second{
    width: 80%;
    height: 320px;
    margin: 0 auto;
    margin-top: 30px;
    background-color: whitesmoke;
    border: 1px solid gainsboro;
    .one{
      width: 100%;
      height: 50px;
      line-height: 60px;
      background-color: whitesmoke;
      border: 1px solid gainsboro;
    }
    .two{
      width: 100%;
      height: 190px;
      background-color: white;
      text-align: center;

    }
    .three{
      width: 100%;
      height: 60px;
      display: flex;
      background-color: whitesmoke;
      button{
        width: 130px;
        height: 40px;
        margin-left: 20px;
        margin-top: 22px;
      }
    }
  }
  .third{
    width: 80%;
    height: 50px;
    margin: 0 auto;
    border-top: 1px solid gainsboro;
    border-bottom: 1px solid gainsboro;
  }
  .four{
    width: 80%;
    height: 120px;
    margin: 0 auto;
    border-bottom: 1px solid gainsboro;
  }
  .five{
    width: 80%;
    height: 40px;
    margin: 0 auto;
    display: flex;
    line-height: 40px;

    border-bottom: 1px solid gainsboro;
    p{
      margin-left: 120px;
    }
  }
  .six{
    width: 80%;
    height: 60px;
    margin: 0 auto;
    display: flex;
line-height: 60px;
    border-bottom: 1px solid gainsboro;
    p{
      margin-left: 120px;
    }
  }
  .seven{
    width: 80%;
    height: 40px;
    margin: 0 auto;
    text-align: right;
  }
</style>
