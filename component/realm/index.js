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
    skucode:Object,
    fenceGroupArray: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
     choosenCode : Object,
     judger : Object,
     codeChoosenArray: Array,
     codeNeedForbidden:Array,
     
  },

  /**
   * 组件的方法列表
   */
  methods: {
    refresh: function(){
     
    },

    cellcode: function(event){
      console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
      console.log(event.detail.cell);
          let status = event.detail.cell.status;
          if(status === "selected"){  
            this.data.choosenCode.insertCell(event.detail.cell.code);         
            this.setData({
              codeChoosenArray: this.data.choosenCode.pending
            })
          
          }
          if(status === "waiting"){
            this.data.choosenCode.deletecell(event.detail.cell.code);
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
         console.log(this.properties.fenceGroupArray);

        for(let i=0; i<this.properties.fenceGroupArray.length; i++){
          for(let j=0;  j<this.properties.fenceGroupArray[i].dataArray.length; j++){
            if(this.data.codeNeedForbidden.includes(this.properties.fenceGroupArray[i].dataArray[j].code)){
              this.properties.fenceGroupArray[i].dataArray[j].status = CellStatus.FORBIDDEN;
            }
            else{
                if(this.data.codeChoosenArray.includes(this.properties.fenceGroupArray[i].dataArray[j].code)){
                  this.properties.fenceGroupArray[i].dataArray[j].status = CellStatus.SELECTED;
                 
                }else{
                  this.properties.fenceGroupArray[i].dataArray[j].status = CellStatus.WAITING;
                }                 
            }
            console.log("---------------this.properties.data[i].dataArray[j]-----");
            console.log(this.properties.fenceGroupArray[i].dataArray[j]);
          }
        }
        // for(let i=0; i<this.properties.fenceGroupArray.length; i++){
          
        //     if(this.data.codeNeedForbidden.includes(this.properties.fenceGroupArray[i].code)){
        //       this.properties.fenceGroupArray[i].status = CellStatus.FORBIDDEN;
        //     }
        //     else{
        //         if(this.data.codeChoosenArray.includes(this.properties.fenceGroupArray[i].code)){
        //           this.properties.fenceGroupArray[i].status = CellStatus.SELECTED;
                 
        //         }else{
        //           this.properties.fenceGroupArray[i].status = CellStatus.WAITING;
        //         }                 
        //     }
        //     console.log("---------------this.data.fenceGroupArray[i].status-----");
        //     console.log(this.properties.fenceGroupArray[i]);
          
        // }
        //问题所在
        this.setData({
          fenceGroupArray: this.properties.fenceGroupArray
        });
    }

  },

  observers : {
    'data' : function(data){
      if(!data){
        return
      }
     //问题所在
      let skupend = new SkuPending();
      let judge = new Judger(this.properties.data, this.properties.codeKeys);
      // let tempArray = new Array();
      // for(let array of this.properties.data){
      //   tempArray=tempArray.concat(array.dataArray)
      // }
      //console.log("&&&&&&&&&%%%%%%@@@@@@@@@@@!!!!!!!!!!!")
      //console.log(tempArray);
      // this.setData({
      //   choosenCode : skupend,
      //   judger : judge,
      //   fenceGroupArray: tempArray
      // })
      this.setData({
        choosenCode : skupend,
        judger : judge,
        fenceGroupArray: data
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
