// component/spu-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    tags:Array 
  },
  observers:{
    data: function(data){
      if(!data){
        return
      }
      if(!data.tags){
        return
      }
      const tags = data.tags.split('$')
      this.setData({
        tags
      })
      //console.log(tags)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onImgLoad(event){
      const {width,height} = event.detail       
      this.setData({
        w:340,
        h:340 * height / width
      })
    },

    detail:function(event){
      // console.log("id=")
      // console.log(event.currentTarget.dataset.id)
      const id = event.currentTarget.dataset.id
      wx.navigateTo({
        url: '../../pages/detail/detail',
        success: function(res){
          res.eventChannel.emit('acceptDataFromOpenerPage', {id: id })
        }
      })
      //console.log(event)
      
    }

  }
})
