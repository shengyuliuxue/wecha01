//业务对象
import {config} from "../config/config"
import {shttprequest} from "../utils/http"
import { promisec } from "../utils/util"
class Theme{


    static locatiobA = 't-1';
    static locationE = 't-2';
    static async  getHomeLocationA(){
        return await promisec(wx.request)({
          url: `${config.apiBaseUrl}/v1/theme/by/names`,
          data:{
              names:Theme.locatiobA
          },
          header:{
                      appkey: config.appkey
                }
        })
    }

    static async getHomeLocationE(){
        return await promisec(wx.request)({

        })
    }
}

export{
  Theme
}