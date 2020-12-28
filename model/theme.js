//业务对象
import {config} from "../config/config"
import {shttprequest} from "../utils/http"
import { promisec } from "../utils/util"
class Theme{


    static locationA = 't-1';
    static locationE = 't-2';
    static locationF = 't-3';
    static locationH = 't-4';

    static async getThemes(){
        const names = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH}`;
        return await promisec(wx.request)({
            url: `${config.apiBaseUrl}/v1/theme/by/names`,
            data:{
                names:names
            },
            header:{
                appkey: config.appkey
            } 
        })
    }

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