import {promisec} from "../utils/util"
import {config} from "../config/config"

class Activity{
  static locationD='a-2'
  static async getLocationD(){
     return await promisec(wx.request)({
       url:`${config.apiBaseUrl}/v1/activity/name/${this.locationD}`,
       header:{
        appkey: config.appkey
      }
     })
  }
}

export{
  Activity
}