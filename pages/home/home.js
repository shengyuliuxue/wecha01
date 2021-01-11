// pages/home.js

import {Theme} from "../../model/theme"
import {Banner} from "../../model/Banner"
import {Grid} from "../../model/Grid"
import {Activity} from "../../model/Activity"
import {Http} from "../../utils/http"
import {Paging} from "../../model/Paging"

Page({

  /**
   * 页面的初始数据
   */
  data: {
      topTheme:null,
      imageheight:null,
      banner:null,
      grid:[],
      activityD:null,
      spuTheme:null,
      themeF:null,
      bannerG:null,
      demo: null,
      page:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
async  initAllData(){

    // const themes = await Theme.getThemes();
    //  const ThemeA = themes.data.find(t=>t.name==='t-1');
    //  const ThemeE = themes.data.find(t=>t.name==='t-2');

    //  console.log(themes);
    const th = new Theme();
    await th.getThemes();
    const themeESpuList = await Theme.getThemeLocationESpu()
    // const a = th.getHomeLocationA();
     //console.log(themeESpuList);
    const themeF = th.getHomeLocationF();
    const bannerG = await Banner.getLocationG();
    
     this.setData({
      topTheme: th.getHomeLocationA(),
       imageheight:300,
       spuTheme:themeESpuList,
       themeF:themeF,
       bannerG:bannerG
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



    //  this.setData({
    //    page: new Paging({
    //      url:'v1/spu/latest',
    //      start:0,
    //      count:5
    //    })
    //  });

    //  const spudata = await this.data.page.getCurrentData();
    //  console.log(spudata.items);
    //  this.setData({
    //    demo: spudata.items
    //  })

    //  wx.lin.renderWaterFlow(this.data.demo, false, ()=>{
    //   console.log('渲染成功')
    // })
    
    // const moredata = await this.data.page._nextPageData();
    // console.log(moredata);

    //this.data.page._nextPageData();

     const paging = new Paging({
         url:'v1/spu/latest',
         start:0,
         count:5
       })

     await paging.getCurrentData();  
     
     await paging._nextPageData();
     
     await paging._nextPageData();
    
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

      console.log("加载更多")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})