// pages/detail.js
import{Http} from "../../utils/http"

Page({

  /**
   * 页面的初始数据
   */
  data: {
      id:null  
  },
  
   
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
      const $this = this
      const eventChannel = this.getOpenerEventChannel()
      eventChannel.on('acceptDataFromOpenerPage', function(receiveData){  
        $this.setData({
          id: receiveData.id
        })
      })
      const productDetail = await Http.request({
        url:`v1/spu/id/${this.data.id}/detail`
      })
      console.log(productDetail)
      //先提取成二维数组，再转秩
      this.getArray(productDetail)
  },

  getArray(detail){
    
    if(!detail.sku_list){
       return
    }
    var temp = new Array()
    
    for(var i=0;i < detail.sku_list.length; i++){
      temp[i] = new Array()
      for(var j=0; j < detail.sku_list[i].specs.length; j++){

         temp[i][j]=detail.sku_list[i].specs[j]
         
      }
    }
    console.log(temp)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})