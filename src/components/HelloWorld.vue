<template>
    <div class="box">
      <!--<div class="ball" style="width: 15px;height: 15px;border-radius: 50%;background-color: yellowgreen;-->
<!--position: absolute;top: 560px;left: 200px">-->
      <!--</div>-->
      <div class="number" style="width: 25px;height: 25px;border-radius: 50%;text-align: center;line-height: 30px;
      background-color: red;color: white;position: absolute;top: 20px;right: 110px;font-size: 10px">
        {{gettotalnum}}
      </div>
      <div class="gou" :class="{xianShi:isblock}">
<div style="display: flex;background-color: white;margin-top: 10px;
border-bottom: 1px solid gainsboro;" v-for="(item,index) in getlist" :key="index">
  <div class="le" style="width: 50px;height: 50px;">
    <img :src="item.ali_image" alt="">
  </div>
  <div class="rt">
    <p>{{item.title}}</p>
    <p style="color: gainsboro">{{item.spec_json.show_name}}</p>
    <p style="color: red">￥{{item.price}}.00</p>
  </div>
</div>
        <div style="width: 100%;height: 70px;margin-top: 35px;background-color: whitesmoke;
        display: flex;justify-content: space-between">
    <div>
      <p style="color: black">共{{gettotalnum}}件商品</p>
      <p style="color: black">合计<span style="color: red">￥{{gettotalmoney}}</span></p>
    </div>
          <button class="btn btn-info" style="width: 70px;height: 30px;margin-top: 10px">
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
  <li>
    <router-link to="Paowuxian">
      第三方配件
    </router-link>

  </li>
  <li>·</li>
  <li>全部商品</li>
  <li>·</li>
  <li>服务</li>
</ul>
</div>
        <div class="two">
<ul>
  <li style="color: blue">综合排序</li>
  <li>·</li>
  <li>销量排序</li>
  <li>·</li>
  <li>价格低到高</li>
  <li>·</li>
  <li>价格高到低</li>
</ul>
        </div>
      </div>
      <div class="sencond">
        <div class="lini" v-for="(item,index) in dataList" :key="index" v-if="item.sku_info.length>=4">
            <img v-bind:src='item.sku_info[index11].ali_image' alt="" @click="ji(item.sku_info[index11].sku_id)">
          <p>{{item.name}}</p>
          <p style="font-size: 10px;color: gainsboro">{{item.name_title}}</p>
          <div class="dian">
            <div v-for="(itemIn,index1) in item.sku_info" :key="index1">
              <img :src="`http://img01.smartisanos.cn/`+itemIn.spec_json.image+`20X20.jpg`"  alt="" @click="dianItem(index,index1,item,item.sku_info[index1].sku_id)" :class="{cicle:dianNum===index1}">
            </div>
          </div>
          <div class="show">
            <button class="btn1" style="background-color: gainsboro;font-size: 12px;text-align: center;
line-height: 100%;color: white;border: 1px solid gainsboro"  @click="ji(item.sku_info[index11].sku_id)">
                查看详情
            </button>
            <button class="btn2" style="background-color: deepskyblue;font-size: 12px;text-align: center;
line-height: 100%;color: white;border: 1px solid deepskyblue" @click.stop="add(item.sku_info[index11])">加入购物车</button>
          </div>
          <p style="color: red" class="p">
          ￥{{item.price}}
        </p>
          <!--</router-link>-->
        </div>
        <div class="lini" v-for="(item,index) in dataList" :key="index" v-if="item.sku_info.length<2" >
        <!--<router-link :to="`/Detail/`+item.sku_info[index].sku_id">-->
        <img :src='item.sku_info[0].ali_image' alt="" @click="ji(item.sku_info[0].sku_id)">
        <p>{{item.name}}</p>
        <p style="font-size: 10px;color: gainsboro">{{item.name_title}}</p>
        <div class="dian">
          <div v-for="(itemIn,index1) in item.sku_info" :key="index1">
            <img :src="`http://img01.smartisanos.cn/`+itemIn.spec_json.image+`20X20.jpg`" alt="" @click="dianItem(index,index1,item,item.sku_info[0].sku_id)" :class="{cicle:dianNum===index1}">
          </div>
        </div>
        <div class="show" >
          <button class="btn1" style="background-color: gainsboro;font-size: 12px;text-align: center;
line-height: 100%;color: white;border: 1px solid gainsboro" @click="ji(item.sku_info[index11].sku_id)">
              查看详情
          </button>
          <button class="btn2" style="background-color: deepskyblue;font-size: 12px;text-align: center;
line-height: 100%;color: white;border: 1px solid deepskyblue" @click.stop="add(item.sku_info[0])">加入购物车</button>
        </div>
        <p style="color: red" class="p">
          ￥{{item.price}}
        </p>
        <!--</router-link>-->
      </div>
      </div>
    </div>
</template>
<script>
  import Axios from 'axios'
  import Vue from 'vue'
  export default {
data(){
  return{
    dataList:[],
   dianNum:3,
    index11:0,
    isblock:false
  }
},
    created() {
      Axios.get('http://m.xyucd.com:7000/goods-list')
        .then(res=>{
          let  data  =res.data.data
          this.dataList=data
          console.log(data)
        })
    },
      methods:{
  show(){
    this.isblock=true
  },
        dianItem(index,index1,obj,i){
          i=obj.sku_info[index1].sku_id
          this.index11=Number(index1)
          this.dianNum=Number(index1);
          console.log(this.index11)
             // obj.sku_info[index].ali_image=obj.sku_info[index1].ali_image;
          this.$store.commit("index1",index1)
        },
        ji(i){
          this.$router.push({path:'/Detail',query:{id:i}})
        },
        add(obj){

          console.log(obj)
          this.$store.commit('send',obj)
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
  *{
    margin: 0;
    padding: 0;
  }
  a{
    color: white;
    text-decoration: none;
  }
 .box{
   width: 100%;
   height: 700px;
   position: relative;
 }
 .gou{
   width: 260px;
   /*height: 200px;*/
   display: none;
   background-color: white;
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
  height: 160px;
  background-color: gainsboro;
  .one{
    width: 90%;
    height: 60%;
    margin: 0 auto;
    line-height: 90px;
    border-bottom: 1px solid gray;
    ul{
      display: flex;
      list-style: none;
      font-size: 12px;
    }
    li{
      margin-left: 20px;
    }
  }
  .two{
    width: 50%;
    height: 30%;
    margin-left: 65px;
    line-height: 60px;
    ul{
      display: flex;
      list-style: none;
      li{
        margin-left: 15px;
        font-size: 12px;
      }
      li:hover{
        color: blue;
      }
    }
  }
}
  .sencond{
    width: 90%;
    height: 450px;
    margin: 0 auto;
    /*border-radius: 20px;*/
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    .lini{
      width: 25%;
      height: 80%;
      text-align: center;
      margin-top: 20px;
      border-right:  1px solid gainsboro;
      position: relative;
      img{
        width: 80%;
        height: 50%;
      }
      p{
        font-size: 15px;
      }
      .show{
        width: 100%;
        display: none;
        button{
          width: 90px;
          height: 30px;
          text-align: center;
          display: none;
        }
      }
    }
    .lini:hover{
      padding-top: 10px;
      box-shadow: 0 0 10px 0 #8c8c8c inset;
      button{
        display:block;
      }
      .p{
        display: none;
      }
    }
.btn1{
  position: absolute;
  left:35px;
  top: 290px;
}
    .btn2{
      position: absolute;
      right: 35px;
      top: 290px;
    }
.dian{
  width: 40%;
  height: 20px;
  text-align: center;
  margin: 0 auto;
  display: flex;
  margin-top: 30px;
  justify-content: space-around;
  div{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}
  }
  .cicle{
      border: 2px solid darkgray;
    }
</style>
