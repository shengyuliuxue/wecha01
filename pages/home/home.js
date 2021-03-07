// pages/home.js

import {Theme} from "../../model/theme"
import {Banner} from "../../model/Banner"
import {Grid} from "../../model/Grid"
import {Activity} from "../../model/Activity"
import {Http} from "../../utils/http"
import {Paging} from "../../utils/Paging"
import {SpuPaging} from "../../model/SpuPaging"

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
      page:null,
      loadingType:"loading"
  },

  onLoad: async function (options) {

    this.initAllData();
    //debugger;
    const initdata =  await this.initBottomSpuList()
    wx.lin.renderWaterFlow(initdata.items, false, ()=>{
      //console.log("666")
    })
    //console.log(initdata)
 },

  async initBottomSpuList(){
   
    this.page = await SpuPaging.getLatest()
    const data = await this.page.getMoreData()
    if(!data){
      return
    }  
    return data
  },
  /**
   * 生命周期函数--监听页面加载
   */
async  initAllData(){

    // const themes = await Theme.getThemes();
    //  const ThemeA = themes.data.find(t=>t.name==='t-1');
    //  const ThemeE = themes.data.find(t=>t.name==='t-2');

    //  console.log(themes);
    //this.data.page = await SpuPaging.getLatest();
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

     //this.setData({
      //  page: new Paging({
      //    url:'v1/spu/latest',
      //    start:0,
      //    count:5
      //  })
      //page: SpuPaging.getLatest()
     //});

     //const spudata = await this.data.page.getCurrentData();
     //const spudata = await this.data.page.getMoreData();

    //  console.log(spudata.items);
    //  this.setData({
    //    demo: spudata.items
    //  })

    //  wx.lin.renderWaterFlow(this.data.demo, false, ()=>{
    //   console.log('渲染成功')
    // })
   
    
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
  onReachBottom: async function () {
   const moredata = await this.page.getMoreData();  
    if(!moredata){
      return
    }
    wx.lin.renderWaterFlow(moredata.items)
    if(!this.page.moredata){
      this.setData({
        loadingType:"end"
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})