// component/realm/index.js
import {SkuPending} from "../../model/SkuPending"
import{Cell} from "../../model/Cell"
import{Judger} from "../../model/Judger"

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:Array,
    codeKeys:Array,
    skucode:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
     choosenCode : Object,
     judger : Object,
     codeArray: Array
  },

  /**
   * 组件的方法列表
   */
  methods: {
      cellcode: function(event){
          let status = event.detail.status;
          if(status === "selected"){
            // let code = this.data.choosenCode.concat(event.detail.code);
            // let codeSet = new Set(code)
            // code = Array.from(codeSet)
            // this.setData({
            //   choosenCode: code 
            // })    
            this.data.choosenCode.insertCell(event.detail.code);         
            this.setData({
              codeArray: this.data.choosenCode.pending
            })
          
          }
          if(status === "waiting"){
            // let code = this.data.choosenCode;
            // let codeSet = new Set(code)
            // codeSet.delete(event.detail.code);
            // code= Array.from(codeSet);
            // this.setData({
            //   choosenCode: code
            // })
            this.data.choosenCode.deletecell(event.detail.code);
            this.setData({
              codeArray: this.data.choosenCode.pending
            })
          }
                 
          this.data.judger.refreshStatus(this.data.choosenCode.pending, this.properties.skucode);
         
      }
  },

  observers : {
    'data' : function(data){
      if(!data){
        return
      }
     
      let skupend = new SkuPending();
      let judge = new Judger(this.properties.data, this.properties.codeKeys);
      this.setData({
        choosenCode : skupend,
        judger : judge
      })
    },

    'codeArray': function(codeArray){
        if(!codeArray){
          return
        }
        //console.log("codeArray changed");
        //console.log(codeArray);
        
    }
  }

})
