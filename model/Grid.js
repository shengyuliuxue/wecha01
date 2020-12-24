import {promisec} from "../utils/util"
import {config} from "../config/config"

class Grid{
  static async getGirds(){
     return await promisec(wx.request)({
        url: `${config.apiBaseUrl}/v1/category/grid/all`,
        header:{
          appkey: config.appkey
        }
      }
     )
  }
}

export{
  Grid
}