// pages/home.js

import {Theme} from "../../model/theme"
import {Banner} from "../../model/Banner"
import {Grid} from "../../model/Grid"
import { Activity } from "../../model/Activity";


function hello(x){
  return x>0;}

console.log(hello(1));

Page({

  /**
   * 页面的初始数据
   */
  data: {
      topTheme:null,
      banner:null,
      grid:[],
      activityD:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  initAllData(){
    // let theme = new Theme();
    let promise = Theme.getHomeLocationA();
     promise.then((value)=>{
       console.log(value.data[0]);
       this.setData({
         topTheme:value.data[0]
       })
     })

     let promiseB = Banner.getLocationB();
     promiseB.then((value)=>{
       this.setData({
         banner:value.data.items
       })
     })

     let girds = Grid.getGirds();
     girds.then((value)=>{
       this.setData({
         grid:value.data
       })
     })

     Activity.getLocationD().then((value)=>{
       this.setData({
          activityD:value.data 
       })
       //console.log(value.data)
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