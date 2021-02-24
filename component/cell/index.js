// component/cell/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cell:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
     outerclass:null,
     innerclass:null 
  },

  /**
   * 组件的方法列表
   */
  methods: {
    choose: function(event){
      console.log(event.currentTarget.dataset.title);
      console.log(event.currentTarget.dataset.status);
     if (event.currentTarget.dataset.status === "waiting"){
       this.setData({
          outerclass:"s-outer",
          innerclass:"s-inner"
       })
     }
     if (event.currentTarget.dataset.status === "selected"){
      this.setData({
         outerclass:"",
         innerclass:""
      })
    }

    }
  }
})
