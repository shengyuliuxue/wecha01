// pages/detail.js
import{Http} from "../../utils/http"

Page({

  /**
   * 页面的初始数据
   */
  data: {
      id:null,
      keyvalue:null     
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
     const object = this.getArray(productDetail)
     console.log(object)
      this.setData({
        keyvalue: object
      })
  },

  getArray(detail){
    
    if(!detail.sku_list){
       return
    }
    let temp = new Array()
    const row = detail.sku_list.length
    const column = detail.sku_list[0].specs.length
    const title = new Array()
    const resultArray = new Array()
    for(let i=0;i < row; i++){
      temp[i] = new Array()
      for(let j=0; j < column; j++){
         temp[i][j]=detail.sku_list[i].specs[j].value
         if(title.length < column){
           title.push(detail.sku_list[i].specs[j].key) 
         }
      }
    }
    //console.log(title)
    const matrixArray =  this.matrix(temp,row,column)
    //console.log(matrixArray) 
    const keyValueObject = this.keyValuePair(title, matrixArray)
    //console.log(keyValueObject)
    return keyValueObject
  },

  keyValuePair(keyArr, valArr){
    let data = {};
    for(let i=0; i<keyArr.length; i++){
      let key = keyArr[i];
      let value = valArr[i];
      data[key]=value; 
    }
    return data;
  },

  matrix(itemArray, rowNum, colNum){
    let matrixArray = new Array()
    for(let j=0; j < colNum; j++){
      let temp = new Array()
      for(let i=0; i < rowNum; i++){
        !temp.includes(itemArray[i][j]) && temp.push(itemArray[i][j])
      }
      matrixArray[j]=temp
    }
    //console.log(matrixArray)
    return matrixArray
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