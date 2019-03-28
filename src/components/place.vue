<template>
    <div class="box">
      <div class="gou" :class="{xianShi:isblock}">
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
        display: flex;justify-content: space-between;color: white;">
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
            <img src="../img/2019-03-15_165014.png" alt="" class="gwc">
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
          <div class="change">
            <router-link to="User">
              我的订单
            </router-link>

          </div>
          <div>
            <router-link to="Place">
              收货地址
            </router-link>
          </div>
        </div>
        <div class="right">
          <div class="shang">
            <p>
              收货信息
            </p>
            <div @click="addplace" style="width: 100px;height: 30px;text-align: center;
            line-height: 30px;background-color: deepskyblue;color: white;">
              +添加新地址
            </div>
          </div>
          <div class="xia" v-for="(item,index) in getmessage" :key="index">
            <p style="width: 100px;text-align: center;">{{item.name}}</p>
            <p>{{item.areaname}}</p>
            <p>{{item.area}}{{item.place}}{{item.detail}}</p>
            <p>设为默认地址</p>
           <button style="width: 50px;height: 25px;background-color: deeppink;margin-top: 55px;
           color:white;text-align: center;;line-height: 25px;" @click="change(item,index)">
             ✍
           </button>
            <button style="width: 50px;height: 25px;background-color: deeppink;margin-top: 55px;
           color:white;text-align: center;;line-height: 25px;margin-right: 50px" @click="remove(index)">
X
           </button>
          </div>
    </div>
    </div>
      <div class="dinwei" :class="{xianShi:isnone}">
        <div class="top" style="display: flex;justify-content: space-between">
          <p>管理收货地址</p>
          <p @click="off">X</p>
        </div>
        <input type="text" v-model="user" placeholder="收货人姓名">

        <input type="text" placeholder="手机号" v-model="tele">
        <div class="inp">
          <input type="text" style="width: 120px;height: 100%;" placeholder="区号(可选)">
          <input type="text" style="width: 170px;height: 100%;" placeholder="固定电话(可选)">
        </div>
        <select v-model="city"  @change="changecity(city)">
          <option>请选择省份</option>
          <option v-for="(item,indexx) in placelist" :key="indexx"
                  :value="item.area_id">{{item.area_name}}</option>
        </select>
        <div class="selelt">
          <select style="width: 120px;height: 40px;background-color: gainsboro" v-model="cityid"
                  @change="changecityid(cityid)">
            <option>请选择城市</option>
            <option v-for="(item1,index) in city1" :key="index"
                    :value="item1.area_id">{{item1.area_name}}</option>
          </select>
          <select style="width: 180px;height: 40px;background-color: gainsboro" v-model="xiangcon"
          @change="countychange(xiangcon)">
            <option>请选择区县</option>
            <option v-for="(item2,indexxx) in city2" :key="indexxx"
            :value="item2.area_id">{{item2.area_name}}</option>
          </select>
        </div>
        <input type="text" placeholder="详细地址，如街道名称，楼层，门牌号码等"
               style="width: 300px;height: 40px;margin-top: 40px" >
        <div class="anniu">
          <input type="radio" checked="" style="width: 15px"/>
          <p>设为默认</p>
        </div>
        <div class="inset">
          <button class="btn btn-info" @click="red">
            保存
          </button>
        </div>
      </div>
    </div>
</template>

<script>
  import Axios from 'axios'
    export default {
      data(){
        return{
          isnone:false,
          isblock:false,
          placelist:[],
          index1:[],
          city1:[],
          city2:[],
          city:0,
          cityid:0,
          index2:[],
          user: '',
          tele:'',
          areaname:'',
          countyname:'',
          placename:'',
          detailname:'',
          xiangcon:0,
          countyid:0,
          updatemessage:{}
        }
      },
       methods:{
        show(){
          this.isblock=true
        },
addplace(){
  this.isnone=true
},
         change(index){
           this.isnone=true
           console.log(index)
           this.$store.commit('xiabiao',index)
         },
         red(){
           this.isnone=false;
           this.updatemessage={
             'name':this.user,
             'phone':this.tele,
             'place':this.areaname,
             'area':this.countyname,
             'county':this.placename,
             'detail':this.detailname
           }
           this.$store.commit('redmessage',this.updatemessage)
         },
         remove(index){
           return this.$store.commit('shanchuplace',index)
         },
         off(){
           this.isnone=false
         },
         changecity(id){
           for(let i of this.placelist){
             if(i.area_id===id){
               this.city1=i.city_list
               this.areaname=i.area_name;
             }
           }
         },
         changecityid(id){
           // console.log(id)
           for(let i of this.city1){
             console.log(i)
             if(i.area_id===id){
               this.city2=i.county_list
               this.placename=i.area_name;
               console.log(this.placename)
               // console.log(i)
             }
           }
         },
         countychange(id){
           for(let i of this.city2){
             if(i.area_id===id){
               this.countyname=i.area_name
             }
           }
         }
       },
      created() {
        Axios.get('https://www.easy-mock.com/mock/5a6ac7882d33bf493f881505/hammer/address').then(res=>{
          // console.log(res)
        })
      },
      computed:{
        getmessage(){
          return this.$store.state.Message
        },
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
      created() {
        Axios.get('https://www.easy-mock.com/mock/5a6ac7882d33bf493f881505/hammer/address').then(res=>{
          let data = res.data
          this.placelist=data
          // console.log(data)
          for(i=0 in data){
            this.index1=data[i].city_list
            // console.log(this.index1)
            for(k=0 in this.index1){
              this.index2=this.index1[k].county_list
              // console.log(this.index2)
            }
          }
          this.city='请选择省份'
          this.cityid='请选择城市'
        })
      }
    }
</script>
<style scoped lang="scss">
  .dinwei{
    width: 400px;
    height: 530px;
    position: fixed;
    display: none;
    top: 30px;
    left: 400px;
    border-radius: 20px;
    background-color: white;
    /*border: 1px solid red;*/
    .top{
      width: 100%;
      height: 50px;
      line-height: 50px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;

      background-color: gainsboro;
    }
    input{
      width: 80%;
      height: 40px;
      margin-top: 10px;
      margin-left: 30px;
    }
    .inp{
      width: 100%;
      height: 40px;
    }
    select{
      width: 330px;
      height: 40px;
      margin-left: 30px;
      margin-top: 20px;
      background-color: gainsboro;
    }
    .selelt{
      width: 100%;
      height: 40px;
      /*margin-top:5px;*/
      display: flex;
    }
    .anniu{
      width: 100%;
      height: 20px;
      line-height: 20px;
      display: flex;
      p{
        margin-top: 20px;
      }
    }
    .inset{
      width: 100%;
      height: 40px;
      margin-top: 30px;
      button{
        width: 90%;
        height: 100%;
        text-align: center;
        /*line-height: 40px;*/
        color: white;
        margin-left: 10px;
      }
    }
  }
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
    background-color: whitesmoke;
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
  .gwc:hover{
       .gou{
         display: block;
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
      .shang{
        width: 100%;
        height: 50px;
        background-color: whitesmoke;
        display: flex;
        justify-content: space-between;
      }
      .xia{
        width: 100%;
        height: 140px;
        display: flex;
        line-height: 140px;
        justify-content: space-between;
        border: 1px solid gainsboro;
      }
    }
  }
</style>
