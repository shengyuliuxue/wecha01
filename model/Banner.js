import {promisec} from "../utils/util"
import {config} from "../config/config"

class Banner{
  static locationB='b-1';
  static async getLocationB(){
    return await promisec(wx.request)({
      url: `${config.apiBaseUrl}/v1/banner/name/${this.locationB}`,
      header:{
        appkey: config.appkey
      }
    })
  }
}

export{
  Banner
}