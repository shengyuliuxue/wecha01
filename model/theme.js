//业务对象
import {config} from "../config/config"
import {shttprequest} from "../utils/http"
class Theme{

    data(){
      return new Promise((resolve, reject)=>{
        wx.request({
            url: `${config.apiBaseUrl}/v1/theme/by/names`,
            method:'GET',
            data:{
              names: 't-1'
            },
            header:{
              appkey: config.appkey
            },
            success:(res)=>{resolve(res)}
        })
      });
    }

    async  getHomeLocationA(){
        //此处带this， 否则出错
        let result = await this.data();
        //console.log(result);
        return result;
    }


//    static getHomeLocationA(callback){
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


  //   shttprequest.request(
  //     {
  //       url:`${config.apiBaseUrl}/v1/theme/by/names`,
  //       method:'GET',
  //       data:{
  //         names: 't-1'
  //       },
  //       header:{
  //         appkey: config.appkey
  //       },
  //     },
  //     callback
  //   )


  //  }

}

export{
  Theme
}