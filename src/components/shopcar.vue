<template>
  <div class="box">
    <header>
      <div class="logo">
        <img src="../img/2019-03-15_164224.png" alt="">
      </div>
      <div class="list" style="margin-top: 34px">
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
<div class="title">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 购物清单
</div>
      <div class="li">
       <ul>
           <li>商品信息</li>
         <li style="margin-left: 360px"></li>
         <li>单价</li>
         <li style="margin-left: 60px">数量</li>
         <li style="margin-left: 60px">小计</li>
         <li style="margin-left: 50px">操作</li>
       </ul>
    </div>
  <div class="list" v-for="(item,index) in getlist" :key="index">
    <div class="layui-form-item" pane="">
        <input type="checkbox" :checked="item.ischecked " @click="onechecked(getlist,item)"
       >
    </div>
    <div class="shop">
      <div class="one">

        <img :src="item.ali_image" alt="">
      </div>
      <div class="two">
<p>{{item.title}}</p>
        <p>{{item.spec_json.show_name}}</p>
      </div>
    </div>
    <div class="price">
      ￥{{item.price}}.00
    </div>
    <div class="number">
      <button @click="jia(item)">+</button>
      <span>{{item.count}}</span>
      <button @click="jian(item)">-</button>
    </div>
    <div class="money">
      ￥{{item.count*item.price}}
    </div>
    <div class="remove">
      <button @click="remove(index)">x</button>
    </div>
  </div>
      <div class="buy">
        <div class="layui-form-item" pane="">
          <input type="checkbox" name="like1[write]" v-model="allchecked" lay-skin="primary" @click="allclick(getlist)">
          <span>全选</span>
          <p @click="removecheck()">删除选中的商品</p>
        </div>
        <div class="right">
          <div class="j">
            <p>已选择<span>{{gettotalnum}}</span>件商品</p>
            <p style="color: gainsboro;font-size: 12px">共计<span>{{gettotalnum}}</span>件商品</p>
          </div>
          <div class="k">|</div>
          <div class="l">
            <p>应付总额  &nbsp; &nbsp;<span>￥{{gettotalmoney}}</span></p>
            <p style="color: gainsboro;font-size: 12px">应付总额不含运费</p>
          </div>
          <button class="btn btn-info">
            <router-link to="NowBuy">
            现在结算
            </router-link>
          </button>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
    export default {
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
      },
      data(){
        return {
          num:1,
          allchecked:true
        }
      },
      methods:{
        allclick(getlist){
          if(this.allchecked){
            for(var i of getlist){
              i.ischecked=false
            }
          }else {
            for(var i of getlist){
              i.ischecked=true
            }
          }

        },
        onechecked(getlist,obj){
          obj.ischecked=!obj.ischecked
          for(let i of getlist){
            if(!i.ischecked){
              this.allchecked=false
            }
          }
          let k=0;
          for(let i of getlist){
            if(i.ischecked){
              k++;
            }
          }
          var length =getlist.length;
          if(k===length){
            this.allchecked=true
          }
        },
        jia(obj){
           return this.$store.commit('increment',obj)
        },
        jian(obj){
          return this.$store.commit('inderement',obj)
        },
        remove(obj){
          return this.$store.commit('shanchu',obj)
        },
        removecheck(obj){
          if(this.checked===true){
            return this.$store.commit('shanchu',obj)
          }
        }
      }
    }
</script>
<style scoped lang="scss">
  .box{
    width: 100%;
    height: 700px;
    background-color: whitesmoke;
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
    height:auto;
    margin: 0 auto;
    border: 1px solid deepskyblue;

    .title{
      width: 100%;
      height: 40px;
      line-height: 40px;
      background-color: gainsboro;
      font-size: 15px;
      border: 1px solid deepskyblue;
    }
    .li{
      width: 100%;
      height: 20px;
      background-color: gainsboro;
      border-bottom:  1px solid deepskyblue;
      ul{
        width: 100%;
        list-style: none;
        display: flex;
font-size: 12px;
        li{
          margin-left: 30px;
        }
      }
    }
    .list{
      width: 100%;
      height: 100px;
      background-color: whitesmoke;
      display: flex;
      border-bottom: 1px solid deepskyblue;
.layui-form-item{
  margin-top: 35px;
  margin-left: 30px;
}
      .shop{
        width: 180px;
        height: 100px;
        margin-left: 15px;
        display: flex;
        .one{
          width: 60px;
          height: 60px;
          margin-top: 20px;
          border: 1px solid gainsboro;
          line-height: 60px;
          img{
            width: 97%;
            height: 80%;
          }
        }
        .two{
          width: 120px;
          margin-top: 28px;
          margin-left: 5px;
          font-size: 12px;
        }
      }
      .price{
        margin-left: 213px;
        margin-top: 30px;
      }
      .number{
        margin-left: 30px;
        margin-top: 30px;
        button{
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: yellow;
          border: 1px solid yellow;
          text-align: center;
        }
        span{
          margin-left: 4px;
          margin-right: 4px;
        }
      }
      .money{
        margin-left: 30px;
        margin-top: 30px;
      }
      .remove{
        margin-left: 30px;
        margin-top: 30px;
        button{
          width: 25px;
          height: 25px;
          background-color: #1E9FFF;
          border: 1px solid #1E9FFF;
          border-radius: 50%;
        }
      }
      }
    .buy{
      width: 100%;
      height: 60px;
background-color: white;
      display: flex;
      justify-content: space-between;
      .layui-form-item{
        margin-top: 20px;
        margin-left: 30px;
        display: flex;
        line-height: 100%;
        span{
          margin-left: 3px;
          font-size: 14px;
        }
        p{
          margin-left: 25px;
          color: gainsboro;
          font-size: 10px;
        }
      }
      .right{
        display: flex;
        line-height: 100%;
        .j{
          margin-top: 5px;
          font-size: 13px;
          margin-left: 6px;
        }
        .k{
          margin-top: 15px;
          margin-left: 6px;
          font-weight: 100;
          font-size: 50px;
        }
        .l{
          margin-top: 5px;
          margin-left: 6px;
          font-size: 13px;
        }
        button{
          width: 100px;
          height: 35px;
          margin-left: 6px;
          margin-top: 10px;
          margin-right: 10px;
        }
      }
    }
    }
</style>
