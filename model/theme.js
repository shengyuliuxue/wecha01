//业务对象
import {config} from "../config/config"
class Theme{
   static getHomeLocationA(callback){
    wx.request({
      url:`${config.apiBaseUrl}/v1/theme/by/names`,
      method:'GET',
      data:{
        names: 't-1'
      },
      header:{
        appkey: config.appkey
      },
      success:(res)=>{         
          callback(res.data)
          console.log(res.data)
      }
  }
)
   }
}

export{
  Theme
}