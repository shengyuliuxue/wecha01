// component/realm/index.js
import {SkuPending} from "../../model/SkuPending"
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:Array  
  },

  /**
   * 组件的初始数据
   */
  data: {
     choosenCode : Object
  },

  /**
   * 组件的方法列表
   */
  methods: {
      cellcode: function(event){
          
          console.log("event.detail");
          console.log(event.detail);
          let status = event.detail.status;
          //console.log(status);
          if(status === "selected"){
            // let code = this.data.choosenCode.concat(event.detail.code);
            // let codeSet = new Set(code)
            // code = Array.from(codeSet)
            // this.setData({
            //   choosenCode: code 
            // })    
            this.data.choosenCode.insertCell(event.detail.code);
            
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
          }
          console.log(this.data.choosenCode.pending);
      }
  },

  observers : {
    'data' : function(data){
      if(!data){
        return
      }
      let skupend = new SkuPending();
      this.setData({
        choosenCode : skupend
      })
    }
  }

})
