//业务对象
import {config} from "../config/config"
import {shttprequest} from "../utils/http"
class Theme{
   static getHomeLocationA(callback){
//     wx.request({
//       url:`${config.apiBaseUrl}/v1/theme/by/names`,
//       method:'GET',
//       data:{
//         names: 't-1'
//       },
//       header:{
//         appkey: config.appkey
//       },
//       success:(res)=>{         
//           callback(res.data)
//           console.log(res.data)
//       }
//   }
// )
    shttprequest.request(
      {
        url:`${config.apiBaseUrl}/v1/theme/by/names`,
        method:'GET',
        data:{
          names: 't-1'
        },
        header:{
          appkey: config.appkey
        },
      },
      callback
    )


   }
}

export{
  Theme
}