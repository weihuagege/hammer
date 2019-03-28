<template>
    <div class="box">
      <div class="gou" style="background-color: white;" :class={xianShi:isblock}>
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
       <div class="yi">
         <div v-for="(item,index1) in shuzu" :key="index1">
           <img :src="item" alt="" style="width: 40px;height: 40px" @click="changeimg(item,shuzu)">
         </div>
       </div>
        <div class="er">
          <img :src="detailList.ali_image" alt="" style="width: 100%">
        </div>
        <div class="san">
<div class="div1">
  <p>{{detailList.sub_title}}</p>
  <p>
    <span style="color: gainsboro;font-size: 11px">{{detailList.title}}</span>
    <span style="color: red;">￥{{detailList.price}}</span>
  </p>
</div>
          <div class="dian">
            <p>
              颜色
            </p>
            <br>
            <div v-for="(item1,index1) in detailList.sku_list" :key="index1">
              <img :src="item1.image" alt="" @click="color(index1)">
            </div>
          </div>
          <div class="number">
            <p style="margin-left: 5px">数量</p><br>
            <button @click="jian(detailList)">-</button>
            <span style="margin-left: 15px">{{detailList.count}}</span>
            <button style="margin-left: 15px" @click="jia(detailList)">+</button>
          </div>
          <div class="show">
            <button class="btn2" style="background-color: deepskyblue;font-size: 12px;text-align: center;
line-height: 100%;color: white;border: 1px solid deepskyblue" @click="add(detailList)">加入购物车</button>
            <button class="btn1" style="background-color:deeppink;font-size: 12px;text-align: center;
line-height: 100%;color: white;border: 1px solid gainsboro">
              <router-link to="NowBuy">
                现在购买
              </router-link>
            </button>
          </div>
        </div>
      </div>
      </div>
</template>
<script>
    import Axios from 'axios'
    export default {
      data(){
        return{
          detailList:{},
          alldata:{},
          shuzu:[],
          isblock:false
        }
      },
      created() {
        let {id} = this.$route.query
        // console.log(id)
        Axios.get('https://www.easy-mock.com/mock/5a6ac7882d33bf493f881505/hammer/goods-detail')
          .then(res=>{
            let data =res.data
                this.alldata =res.data
                for(let i of data){
                  if(id===i.sku_id){
                    this.detailList=i
                console.log(this.detailList)
              }
                }
            this.shuzu=this.detailList.ali_images
          })
      },
      methods:{
        show(){
          this.isblock=true
        },
        color(index){
          let {id} =this.detailList.sku_list[index]
          let shu =this.alldata
          for(let y of shu){
            if(y.sku_id===id){
              this.data=y
              this.detailList=y
              this.shuzu=this.detailList.ali_images
            }
          }
        },
        changeimg(obj){
          this.detailList.ali_image=obj
        },
        add(obj){
          console.log(obj)
          this.$store.commit('send',obj)
        },
        jia(obj){
          console.log(obj)
          return this.$store.commit('jiaa',obj)
        },
        jian(obj){
          return this.$store.commit('jiann',obj)
        }
      },
      computed:{
        getlist(){
          return this.$store.state.ShopList
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
    height: 700px;
    background-color: whitesmoke;
  }
  .gou{
    background-color: white;
    width: 260px;
    position: absolute;
    border: 1px solid black;
    top: 100px;
    display: none;
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
    height: 350px;
    margin: 0 auto;
    /*line-height: 350px;*/
    display: flex;
    justify-content: space-around;
    background-color: white;
    .yi{
      width: 80px;
      height: 100%;
      padding-top: 20px;
div{
  width: 80%;
  height: 15%;
  margin: 0 auto;
  margin-top: 6px;
  text-align: center;
  border: 1px solid gainsboro;

}
    }

    .er{
      width: 280px;
      height: 100%;
      div{
        width: 160px;
        height: 70%;
        margin: 0 auto;
        margin-top: 50px;

      }
    }
    .san{
      width: 320px;
      height: 100%;
     .div1{
       width: 100%;
       height: 55px;
       border-bottom: 0.5px solid gainsboro;
       margin-top: 30px;
       p{
         width: 100%;
         display: flex;
         font-size: 14px;
         justify-content: space-between;
       }
     }
      .dian{
        width: 40%;
        height: 50px;
        text-align: center;
        display: flex;
        margin-top: 30px;
        justify-content: space-around;
        div{
          width: 15px;
          height: 15px;
          border-radius: 50%;
          img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 1px solid gainsboro;
            .cicle{
              border: 2px solid darkgray;
            }
          }
        }
      }
      .number{
        width: 100%;
        height: 80px;
        display: flex;
        border-bottom: 0.5px solid gainsboro;
        button{
          width: 16px;
          height: 16px;
          margin-left: 10px;
          text-align: center;
          line-height: 16px;
          border-radius: 50%;
          background-color: deepskyblue;
          border: 1px solid deepskyblue;
          font-size: 10px;
          color: white;
        }
      }
      .show{
        width: 100%;
        height: 50px;
        text-align: center;
        button{
          width: 90px;
          height: 30px;
          margin-top:20px;
          border-radius: 10px;
        }
      }
    }
  }
</style>
