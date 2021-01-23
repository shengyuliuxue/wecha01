//根据URL不断获取页面信息
import {Http} from "./http"
import {config} from "../config/config"


class Paging{
  url;
  req={url:''};
  start;
  count;
  currentPage;
  totalPage;
  historyData=[];
  locker = false;
  currentPageData=[];
  moreData=true;
  accumulator=[];

  // constructor({url, start=0, count=10,currentPage=1,totalPage=0}){
  //   this.url =  url;
  //   this.start = start;
  //   this.count = count;
  //   this.currentPage=currentPage;
  //   this.totalPage=totalPage;
  // }

  constructor(req, count = 10, start = 0){
    this.start = start
    this.count = count
    this.url = req.url 
  }
  
  async getCurrentData(){
    //获取当前页数据
    //1 无数据 2 返回错误 3 返回数据比count小 
    if(!this._getLocker()){
      return;
    }
    this._getCurrentReq();
    console.log(this.req);
    const pageData = await Http.request(this.req);
    this.canRequest=true;
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
    this._releaseLocker();
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
    if(this.currentPage < this.totalPage-1){
      return true;
    }
    return false;
  }

  async getMoreData(){
    //getLocker
    //request
    //releaseLocker
    if(!this.moreData){
      return
    }
    if(!this._getLocker){
      return
    }
    const data = await this._actualGetData()
    this._releaseLocker()
    return data 
  }

  async _actualGetData(){
    const req = this._getCurrentReq()
    let paging = await Http.request(req)
    if(!paging){
      return null
    }
    if(paging.total === 0){
      return {
        empty: true,
        items:[],
        moreData:false,
        accumulator:[]
      }
    }
    this.moreData = this._moreData(paging.total_page, paging.page)
    if(this.moreData){
      this.start += this.count
      this._accumulate(paging.items)
    return{
      empty:false,
      items:paging.items,
      moreData:true,
      accumulator:this.accumulator
    }
   }
  }


  _moreData(totalPage, pageNum){
    return pageNum < totalPage
  }

  _accumulate(items){
    this.accumulator = this.accumulator.concat(items)
  }

  _getLocker(){
    if(this.locker){
      return false;
    }
    this.locker = true;
    return true;
  }

  _releaseLocker(){
    this.locker = false;
  }

}

export{
  Paging 
}