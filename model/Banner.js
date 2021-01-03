import {promisec} from "../utils/util"
import {config} from "../config/config"

class Banner{
  static locationB='b-1';
  static locationG='b-2';
  static async getLocationB(){
    return await promisec(wx.request)({
      url: `${config.apiBaseUrl}/v1/banner/name/${Banner.locationB}`,
      header:{
        appkey: config.appkey
      }
    })
  }

  static async getLocationG(){
    return await promisec(wx.request)({
      url: `${config.apiBaseUrl}/v1/banner/name/${Banner.locationG}`,
      header:{
        appkey: config.appkey
      }
    })
  }
}

export{
  Banner
}