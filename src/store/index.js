import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
  state:{
    Message:[
      {
        'name':'熊大',
       'phone':'1381111111111',
        'place':' 市辖区 ',
        'area':'北京市',
        'county':'昌平区',
        'detail':'顺沙路 马池口镇 吉利大学',
        'moren':true,
        'duigou':'√'
      },{
        'name':'光头强',
        'phone':'1381111111111',
        'place':'市辖区  ',
        'area':'北京市',
        'county':'朝阳区',
        'detail':'建国路 sohu现代城 A座',
        'moren':false,
        'duigou':''
      },

    ],
    ShopList:[],
    index1:0,
    num:0,
    isindex:0
  },
  mutations:{
    addlist(state,obj){
     state.Message.push(obj)
    },
    index1(state,index1){
      state.index1=index1
      console.log(state.index1)
    },
send(state,obj){
  // console.log(state.ShopList)
  let flag =true
  state.ShopList.map((item,index)=>{
    if(item.sku_id===obj.sku_id){
      // console.log(item);
      obj.count++;
      if(obj.count>obj.limit_num){
        alert("已经到最大购买数量")
        obj.count=obj.limit_num
      }
      flag=false
    }
  })
  if(flag){
    Vue.set(obj,'count',1)
    Vue.set(obj,'ischecked',true)

    state.ShopList.push(obj)
  }
},
    increment(state,obj){
  console.log(obj)
     ++obj.count
      if(obj.count>obj.limit_num){
        obj.count=obj.limit_num
      }
    },
    inderement(state,obj){
      obj.count--
    if(obj.count<2){
      obj.count=1
    }
    },
    jiaa(state,obj){

      console.log(state.ShopList)
      let flag =true
      state.ShopList.map((item,index)=>{
        if(item.sku_id===obj.sku_id){
          console.log(item);
          obj.count++;
          if(obj.count>obj.limit_num){
            obj.count=obj.limit_num
          }
          flag=false
        }
      })
      if(flag){
        Vue.set(obj,'count',1)
        state.ShopList.push(obj)
      }
    },
    jiann(state,obj){
      --obj.count
      if(obj.count<=1){
        obj.count=1
      }

    },
    shanchu(state,index){
    state.ShopList.splice(index,1)
    },
    xiabiao(state,index){
      state.isindex=index
    },
    redmessage(state,updatemessage){
      state. Message.splice(state.isindex,1,updatemessage)
    },
    shanchuplace(state,index){
state.Message.splice(index,1)
    }
  },
 getters:{
    totalmoney(state){
      let money=0
      state.ShopList.map(item =>{
        money+=item.price*item.count
      })
      return money
    },
   totalnum(state){
     let num=0
     state.ShopList.map( item =>{
       num+=item.count
     })
     return num
   }
 }
})
export default store
