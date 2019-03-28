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
          <div style="margin-top: 10px;">
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
            <img src="../img/2019-03-15_165002.png" alt="">
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
        <div class="left">
          <div style="width: 100%;height: 60%;text-align: center;background-color: white">
            <img src="../img/2019-03-22_145742.png" alt="" style="width: 90%;height: 100%">
          </div>
          <div>
我的订单
          </div>
          <div class="change">
            <router-link to="Place">
              收货地址
            </router-link>
          </div>
        </div>
        <div class="right">
       <div class="yi">
         <img src="../img/2019-03-22_150833.png" alt="">
       </div>
          <div class="er">
            <div class="zuo">
              <div class="title">
                <p>2019-03-22</p>
                <p>订单号： 1553234267294</p>
                <p>单价</p>
                <p>数量</p>
              </div>
              <div class="shop" v-for="(item,index) in getlist" :key="index">
                <img :src="item.ali_image" alt="" style="width: 100px;margin-left: 30px;height: 80px">
                <p style="width: 240px">{{item.title}}</p>
                <p style="margin-left: 70px;">￥{{item.price}}</p>
                <p style="margin-left: 140px;">{{item.count}}</p>
              </div>

            </div>
            <div class="you">
              <div class="hid">
                <p>应付总额</p>
                <p>
                  <router-link to="/">
                    查看详情
                  </router-link>
                </p>
              </div>
              <div class="money">
                <p>￥{{gettotalmoney}}</p>
                <p>已完成</p>
              </div>
            </div>
          </div>
        </div>
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
      },
      methods:{
        show(){
          this.isblock=true
        }
      }
    }
</script>

<style scoped lang="scss">
  a{
    color: black;
    text-decoration: none;
  }
  .box{
    width: 100%;
    height: 1900px;
    background-color: whitesmoke;
  }
  .gou{
    background-color:white;
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
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    .left{
      width: 200px;
      height: 280px;
      border: 1px solid gainsboro;
      div{
        width: 100%;
        height: 50px;
        line-height: 50px;
        color: white;
        margin-top: 10px;
        background-color: deepskyblue;
        text-align: center;
      }
      .change{
        background-color: white;
        color: black;
      }
      .change:hover{
        background-color: deepskyblue;
        color: white;
      }
    }
    .right{
      width: 900px;
      /*height: 600px;*/
      border: 1px solid gainsboro;
      .yi{
        width: 100%;
        height: 50px;
        border: 1px solid gainsboro;
        img{
          width: 98%;
          height: 100%;
        }
      }
      .er{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .zuo{
          width: 75%;
          height: 100%;
          border: 1px solid gainsboro;
          .title{
            width: 100%;
            height: 40px;
            display: flex;
            font-size: 12px;
            line-height: 40px;
            justify-content: space-around;
            background-color: gainsboro;
            border: 1px solid gray;
          }
          .shop{
            width: 100%;
            height: 100px;
            display: flex;
            line-height: 90px;
            /*justify-content: space-around;*/
            div{
              width: 70px;
              height: 70px;
              margin-top: 10px;
              border: 1px solid gainsboro;
            }
          }
        }
        .you{
          width: 25%;
          height: 100%;
          border: 1px solid gainsboro;
.hid{
  width: 100%;
  height: 40px;
  background-color: gainsboro;
  line-height: 40px;
  /*text-align: right;*/
  font-size: 12px;
  display: flex;
  border: 1px solid gray;
  p{
    margin-left: 30px;
  }
}
          .money{
            width: 100%;
            height: 100px;
            text-align: center;
            line-height: 100px;
            display: flex;
            /*text-align: center;*/
            p{
              margin-left: 30px;
            }
          }
        }
      }
    }
  }
</style>
