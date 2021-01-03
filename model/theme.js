//业务对象
import {config} from "../config/config"
import {shttprequest} from "../utils/http"
import { promisec } from "../utils/util"
class Theme{
    static locationA = 't-1';
    static locationE = 't-2';
    static locationF = 't-3';
    static locationH = 't-4';
    result={};
    themes=[];

     async getThemes(){
        const names = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH}`;
        this.result = await promisec(wx.request)({
            url: `${config.apiBaseUrl}/v1/theme/by/names`,
            data:{
                names:names
            },
            header:{
                appkey: config.appkey
            } 
        });
        this.themes = this.result.data;
    }

    getHomeLocationA(){
       return this.themes.find( t=>t.name===Theme.locationA);
    }
    getHomeLocationF(){
        return this.themes.find( t=>t.name===Theme.locationF);
     }
 
    static async getThemeLocationESpu(){
        return Theme.getThemeSpuByName(Theme.locationE);
    } 

    static async getThemeSpuByName(name){
        return await promisec(wx.request)({
            url: `${config.apiBaseUrl}/v1/theme/name/${name}/with_spu`,
            header:{
                appkey: config.appkey
            } 
        });
    }

}

export{
  Theme
}