import {config} from "../config/config"
import {promisec} from "../utils/util"

class Http{

   static async request({url, method='GET', data}) {
     const requestResult = await promisec(wx.request)({
      url:`${config.apiBaseUrl}/${url}`,
      method:method,
      data:data,
      header:{
        appkey: config.appkey
      }
    })
    return requestResult.data
   }

}


export{
  Http
}

