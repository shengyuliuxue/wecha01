// pages/home.js

import {Theme} from "../../model/theme"
import {Banner} from "../../model/Banner"

Page({

  /**
   * 页面的初始数据
   */
  data: {
      topTheme:null,
      banner:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  initAllData(){
    let theme = new Theme();
    let promise = theme.getHomeLocationA();
     promise.then((value)=>{
       //console.log(value.data[0]);
       this.setData({
         topTheme:value.data[0]
       })
     })

     let promiseB = Banner.getLocationB();
     promiseB.then((value)=>{
       this.setData({
         banner:value.data.items[0]
       })
      //console.log(value.data.items[0])
     })

  },

  onLoad: function (options) {
      // Theme.getHomeLocationA(
      //   (info)=>{
      //       this.setData({
      //         topTheme:info[0]
      //       })
      //   }
      // )


     this.initAllData();


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