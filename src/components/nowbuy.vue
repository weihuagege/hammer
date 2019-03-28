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
          <div>
            <img src="../img/2019-03-15_165014.png" alt="" @click="show">
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
<div class="one">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收货信息</div>
        <div class="two">
          <div v-for="(item,index) in getmessage" :key="index" style="position: relative;"
          :class={border:item.moren} @click="qiehuan(getmessage,item,index)">
            <p>{{item.name}}</p>
            <p>{{item.phone}}</p>
            <p>{{item.area}}{{item.place}}{{item.county}}</p>
            <p>{{item.detail}}</p>
            <p style="color: blueviolet;position: absolute;top: 10px;right: 10px;">{{item.duigou}}</p>
          </div>
          <div class="place" @click="chulai">
            <p style="font-size: 40px">+</p>
            <p>使用新的收货地址</p>
          </div>
        </div>
      </div>
      <div class="second1" >
<div class="one">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发票信息</div>
        <div class="two">
          <p> </p>
          <p>发票类型:电子发票</p>
          <p>
            发票抬头
            <input type="radio" name="sex" value="男" title="男" checked="" />个人
            <input type="radio" name="sex" value="女" title="女" />单位
          </p>
          <p>发票内容:购买商品明细</p>
          <hr/>
          <p style="font-size: 12px">电子发票是税务局认可的有效付款凭证，可作为售后服务凭证，以后可用于企业报销</p>
        </div>
      </div>
      <div class="second2">
<div class="one">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;购物清单</div>
        <div class="two">
<p style="margin-left: 30px">
  商品名称
</p>
          <p style="margin-left: 400px">单价</p>
          <p>数量</p>
          <p>小计</p>
        </div>
        <div class="three" v-for="(item,index) in getlist" :key="index" >
            <img :src="item.ali_image" alt="" style="width: 70px;height: 60px;margin-top: 20px">
          <p style="margin-left: 10px;width: 250px;">{{item.title}}</p>
          <p style="margin-left: 170px">{{item.price}}</p>
          <p>{{item.count}}</p>
          <p>{{item.count*item.price}}</p>
        </div>
        <div class="three1">
         <p><span>商品总计:</span><span>￥{{gettotalmoney}}</span></p>
         <p><span>运费:</span><span>+￥8.00</span></p>
        </div>
        <div class="three2">
          <p style="margin-left: 550px">应付金额:</p>
          <p style="color: red;font-size: 20px">￥{{gettotalmoney+8}}</p>
          <button class="btn btn-info">
            <router-link to="NowPay">
              提交订单
            </router-link>
          </button>
        </div>
      </div>
      <div class="dinwei" :class="{xianShi:isnone}">
        <div class="top" style="display: flex;justify-content: space-between">
          <p style="display: block;margin-left: 20px">管理收货地址</p>
          <p @click="off" style="display: block;margin-right: 20px">X</p>
        </div>
        <input type="text" v-model="user" placeholder="收货人姓名" @blur="minzi">
        <p style="margin-left: 40px;color: red">{{error1}}</p>
        <input type="text" placeholder="手机号" v-model="tele" @blur="shou">
        <p style="margin-left: 40px;color: red">{{error}}</p>
        <div class="inp">
          <input type="text" style="width: 120px;height: 80%;" placeholder="区号(可选)">
          <input type="text" style="width: 170px;height: 80%;" placeholder="固定电话(可选)">
        </div>
        <select v-model="city"  @change="changecity(city)">
          <option>请选择省份</option>
          <option v-for="(item,indexx) in placelist" :key="indexx"
                  :value="item.area_id">{{item.area_name}}</option>
        </select>
        <div class="selelt">
          <select style="width: 120px;height: 30px;background-color: gainsboro" v-model="cityid"
                  @change="changecityid(cityid)">
            <option>请选择城市</option>
            <option v-for="(item1,index) in city1" :key="index"
                    :value="item1.area_id">{{item1.area_name}}</option>
          </select>
          <select style="width: 180px;height: 30px;background-color: gainsboro" v-model="countyid"
                  @change="countychange(countyid)">
            <option>请选择区县</option>
            <option v-for="(item2,indexxx) in city2" :key="indexxx"
                    :value="item2.area_id">{{item2.area_name}}</option>
          </select>
        </div>
        <input type="text" placeholder="详细地址，如街道名称，楼层，门牌号码等"
               style="width: 300px;height: 30px;margin-top: 25px" v-model="detailarea"  @blur="xiangxi" />
        <p style="margin-left: 40px;color: red">{{error2}}</p>
        <div class="anniu">
          <input type="checkbox"  style="width: 15px;"/>
         <span>
           设为默认
         </span>
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
         countyid:0,
         cityid:0,
         index2:[],
         user: '',
         tele:'',
         areaname:'',
         countyname:'',
         placename:'',
         detailarea:'',
         error:'',
         error1:'',
         error2:'',
         moren1:false,
         duigou1:''
       }
      },
      methods:{
        qiehuan(getmessage,obj,index){
          console.log(getmessage)
          for(var i of getmessage){
            i.duigou=''
            i.moren=false
          }
          if(obj.moren===true&&obj.duigou==='√'){
            obj.moren=false;
            obj.duigou=''
          }else {
            obj.moren=true;
            obj.duigou='√'
          }
        },
        moren(){

          this.xian=true
          this.biao="√"
        },
        xiangxi(){
          if(this.detailarea===''){
            this.error2='数据不能为空'
          }else {
            this.error1=null;
          }
        },
        minzi(){
          if(!/^[\u4E00-\u9FA5A-Za-z]+$/.test(this.user)){
            this.error1="用户名格式有误"
          }else {
            this.error1=null;
          }
        },
        shou(){
          if (!/^1[34578]\d{9}$/.test(this.tele)) {
            this.error="手机号格式有误";
          } else {
            this.error=null;
          }
        },
        show(){
         this.isblock=true
        },
        red() {
          if (this.areaname !== '' && this.placename !== '' && this.countyname !== '') {

          var obj11 = {
            name: this.user,
            phone: this.tele,
            place: this.placename,
            area: this.areaname,
            county: this.countyname,
            detail: this.detailarea,
            moren:this.moren1,
            duigou:this.duigou1
          }
          this.$store.commit('addlist', obj11)
            this.isnone=false
        }
        },
        chulai(){
          this.isnone=true
        },
        off(){
          this.isnone=false
        },
        changecity(id){
          // console.log(id)
          for(let i of this.placelist){
            // console.log(i)
            if(i.area_id===id){
              this.city1=i.city_list
              // console.log(i);
              this.areaname=i.area_name;
              // console.log(11111)
              // console.log(this.areaname)

            }
          }
        },
        changecityid(id){
          // console.log(id)
          for(let i of this.city1){
            // console.log(i)
            if(i.area_id===id){
              this.city2=i.county_list
              this.placename=i.area_name;
              // console.log(this.placename)
              // console.log(i)
            }
          }
        },
        countychange(id){
          for(let i of this.city2){
            if(i.area_id===id){
              this.countyname=i.area_name
              // console.log(this.countyname)
            }
          }
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
        },
        getmessage(){
          return this.$store.state.Message
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
          this.countyid='请选择区县'
        })
      }
    }
</script>

<style scoped lang="scss">

  .dinwei{
    width: 400px;
    /*height: 530px;*/
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
      height: 30px;
      margin-top: 5px;
      margin-left: 30px;
    }
    .inp{
      width: 100%;
      height: 40px;
    }
      select{
        width: 330px;
        height: 30px;
        margin-left: 30px;
        margin-top: 10px;
        background-color: gainsboro;
      }
    .selelt{
         width: 100%;
         height: 30px;
         /*margin-top:5px;*/
      display: flex;
    }
    .anniu{
      width: 100%;
      height: 30px;
      line-height: 30px;
      display: flex;
      font-size: 14px;
     span{
       margin-top: 5px;
     }
    }
    .inset{
      width: 100%;
      height: 40px;
      margin-top: 10px;
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
.pbloack{
  display: block;
}
  a{
    color: white;
    text-decoration: none;
  }
  .box{
    width: 100%;
    height: 1000px;
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
  .xianShi {
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
    background-color: whitesmoke;
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
    width: 70%;
    /*height: 210px;*/
    margin: 0 auto;
    background-color: white;
    border: 1px solid gainsboro;
    .one{
      width: 100%;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid gainsboro;
      background-color: whitesmoke;
    }
    .two{
      width: 100%;
      /*height: 138px;*/
      /*margin-top: 10px;*/
      background-color: white;
      display: flex;
      flex-wrap: wrap;
      div{
        width: 200px;
margin-top: 10px;
        height: 100%;
        text-align: center;
        border: 1px solid gainsboro;
        margin-left: 25px;
        /*line-height: 100%;*/

        background-color: whitesmoke;
      }
      .border{
        border: 1.5px solid deepskyblue;
      }
    }
  }

  .second1{
    width: 70%;
    height: 210px;
    margin: 0 auto;
    margin-top: 20px;
    background-color: white;
    border: 1px solid gainsboro;
    .one{
      width: 100%;
      height: 50px;
      line-height: 50px;

      border-bottom: 1px solid gainsboro;
      background-color: whitesmoke;
    }
    .two{
      width: 100%;
      height: 138px;
      /*margin-top: 10px;*/
      background-color: white;
p{
  margin-left: 20px;
}
    }
  }
  .second2{
    width: 70%;
    height: 290px;
    margin: 0 auto;
    margin-top: 20px;
    background-color: white;
    border: 1px solid gainsboro;
    .one{
      width: 100%;
      height: 50px;
      line-height: 50px;

      border-bottom: 1px solid gainsboro;
      background-color: whitesmoke;
    }
    .two{
      width: 100%;
      height: 38px;
      font-size: 12px;
      /*margin-top: 10px;*/
      line-height: 38px;
      background-color: gainsboro;
     display: flex;
      p{
        margin-left: 70px;
      }
    }
    .three{
      width: 100%;
      height: 100px;
      line-height: 100px;
      background-color: white;
      border: 1px solid gainsboro;
      display: flex;
      div{
        width: 60px;
        height: 60px;
        margin-top: 15px;
        margin-left: 30px;
        border: 1px solid gainsboro;
      }
      p{
        margin-left: 70px;
      }
    }
    .three1{
      width: 100%;
      height: 100px;
      /*line-height: 100px;*/
      background-color: white;
      border: 1px solid gainsboro;
      /*display: flex;*/
p{
  margin-top: 20px;
  margin-left: 600px;
}
    }
    .three2{
      width: 100%;
      height: 100px;
      line-height: 100px;
      background-color: white;
      border: 1px solid gainsboro;
      display: flex;
      button{
        width: 100px;
        height: 30px;
        margin-left: 10px;
        margin-top: 35px;
      }
    }
  }
</style>
