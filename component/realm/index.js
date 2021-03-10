// component/realm/index.js
import {SkuPending} from "../../model/SkuPending"
import{Cell} from "../../model/Cell"
import{Judger} from "../../model/Judger"
import {CellStatus} from "../../core/enum"

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:Array,
    codeKeys:Array,
    skucode:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
     choosenCode : Object,
     judger : Object,
     codeChoosenArray: Array,
     codeNeedForbidden:Array
  },

  /**
   * 组件的方法列表
   */
  methods: {
    refresh: function(){
     
    },

    cellcode: function(event){
          let status = event.detail.status;
          if(status === "selected"){
            // let code = this.data.choosenCode.concat(event.detail.code);
            // let codeSet = new Set(code)
            // code = Array.from(codeSet)
            // this.setData({
            //   choosenCode: code 
            // })    
            this.data.choosenCode.insertCell(event.detail.code);         
            this.setData({
              codeChoosenArray: this.data.choosenCode.pending
            })
          
          }
          if(status === "waiting"){
            // let code = this.data.choosenCode;
            // let codeSet = new Set(code)
            // codeSet.delete(event.detail.code);
            // code= Array.from(codeSet);
            // this.setData({
            //   choosenCode: code
            // })
            this.data.choosenCode.deletecell(event.detail.code);
            this.setData({
              codeChoosenArray: this.data.choosenCode.pending
            })
          }
                 
        let codeNeedForbiddenSet =this.data.judger.refreshStatus(this.data.choosenCode.pending, this.properties.skucode);
        let  codeNeedForbidden = Array.from(codeNeedForbiddenSet);
        this.setData({
          codeNeedForbidden: codeNeedForbidden
        })
        console.log("this.data.codeNeedForbidden-----------------------------");
         console.log(this.data.codeNeedForbidden);
         console.log(this.data.codeChoosenArray);
         console.log(this.properties.data);

        for(let i=0; i<this.properties.data.length; i++){
          for(let j=0;  j<this.properties.data[i].dataArray.length; j++){
            if(this.data.codeNeedForbidden.includes(this.properties.data[i].dataArray[j].code)){
              this.properties.data[i].dataArray[j].status = CellStatus.FORBIDDEN;
            }
            else{
                if(this.data.codeChoosenArray.includes(this.properties.data[i].dataArray[j].code)){
                  this.properties.data[i].dataArray[j].status = CellStatus.SELECTED;
                 
                }else{
                  this.properties.data[i].dataArray[j].status = CellStatus.WAITING;
                }                 
            }
            console.log("---------------this.properties.data[i].dataArray[j]-----");
            console.log(this.properties.data[i].dataArray[j]);
          }
        }

    }

  },

  observers : {
    'data' : function(data){
      if(!data){
        return
      }
     
      let skupend = new SkuPending();
      let judge = new Judger(this.properties.data, this.properties.codeKeys);
      this.setData({
        choosenCode : skupend,
        judger : judge
      })
    },

    'codeChoosenArray': function(codeChoosenArray){

        console.log("codeChoosenArray ....");
        console.log(codeChoosenArray);
        //刷新每个cell状态
        // let propertiesTempData = this.properties.data;
        // for(let cellArray of propertiesTempData){
        //   for(let cell of cellArray.dataArray){
        //     console.log("cell-----------");
        //     console.log(cell);
        //     if(this.data.codeNeedForbidden.includes(cell.code)){
        //       cell.status = CellStatus.FORBIDDEN;
        //       return;
        //     }
        //     if(this.data.codeChoosenArray.includes(cell.code)){
        //       cell.status = CellStatus.SELECTED;
        //       return;
        //     }
        //       cell.status = CellStatus.WAITING;
        //   }
        // }
        // this.setData({
        //   data: propertiesTempData
        // })
        // console.log("---------------------this.properties.data");
        // console.log(this.properties.data);
    }
  }

})
