//根据URL不断获取页面信息
import {Http} from "../utils/http"
import {config} from "../config/config"

class Paging{
  url;
  req={url:''};
  start;
  count;
  currentPage;
  totalPage;
  historyData=[];
  currentPageData=[];
  constructor({url, start=0, count=10,currentPage=0,totalPage=0}){
    this.url =  url;
    this.start = start;
    this.count = count;
    this.currentPage=currentPage;
    this.totalPage=totalPage;
  }
  
  async getCurrentData(){
    //获取当前页数据
    //1 无数据 2 返回错误 3 返回数据比count小 
    this._getCurrentReq();
    console.log(this.req);
    const pageData = await Http.request(this.req);
    if(pageData == null){
      return;
    }
    this.totalPage = pageData.total_page;
    this.currentPage = pageData.page;
    if(this.currentPage!=this.totalPage){
      this.start += this.count; 
    }else{
      this.start = pageData.total;
    }    
    console.log(pageData);
    return pageData;
  }

  _getCurrentReq(){
    let url = this.url;
    const param = `start=${this.start}&count=${this.count}`
     if (this.url.includes("?")){
        this.req.url = url + "&"+ param;
     }else{
        this.req.url = url + "?" + param;
     }
     return this.req;
  }

  async _nextPageData(){
      if(!this.hasMoreData()){
        return;
      }
    return await this.getCurrentData();
  }

  hasMoreData(){
    //判断是否有更多数据
    if(this.currentPage < this.totalPage){
      return true;
    }
    return false;
  }


}

export{
  Paging 
}