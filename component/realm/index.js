// component/realm/index.js
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
     choosenCode:[] 
  },

  /**
   * 组件的方法列表
   */
  methods: {
      cellcode: function(event){
          console.log("event.detail");
          console.log(event.detail);
          let code = this.data.choosenCode.concat(event.detail.code);
          this.setData({
            choosenCode: code 
          })
          console.log(this.data.choosenCode);
      }
  }
})
