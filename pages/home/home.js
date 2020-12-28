// pages/home.js

import {Theme} from "../../model/theme"
import {Banner} from "../../model/Banner"
import {Grid} from "../../model/Grid"
import { Activity } from "../../model/Activity";

Page({

  /**
   * 页面的初始数据
   */
  data: {
      topTheme:null,
      imageheight:null,
      banner:null,
      grid:[],
      activityD:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
async  initAllData(){
     const themes = await Theme.getThemes();
     const ThemeA = themes.data.find(t=>t.name==='t-1');
     const ThemeE = themes.data.find(t=>t.name==='t-2');

     console.log(themes);

     this.setData({
       topTheme:ThemeA,
       imageheight:100
     });

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
 
     })

  },
  



  onLoad: function (options) {

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