// component/cell/index.js
import {CellStatus} from "../../core/enum"

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cell:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
     outerclass:null,
     innerclass:null 
  },

  /**
   * 组件的方法列表
   */
  methods: {
    choose: function(event){
     
     if (this.properties.cell.status === "waiting"){
       
       this.properties.cell.status = CellStatus.SELECTED
       this.setData({
          outerclass:"s-outer",
          innerclass:"s-inner",
          // cell: { 
          //   title: event.currentTarget.dataset.title,
          //   status: CellStatus.SELECTED
          // }
       })
        //return
     }else{
       if (this.properties.cell.status === "selected"){
      this.properties.cell.status = CellStatus.WAITING
      this.setData({
         outerclass:"",
         innerclass:"",
        //  cell: { 
        //   title: event.currentTarget.dataset.title,
        //   status: CellStatus.WAITING
        // }
      })
        //return 
      }
    }
   
    console.log(this.properties.cell)

    this.triggerEvent('cellevent',
        {
          code: this.properties.cell.code,
          status: this.properties.cell.status
        }, 
        { bubbles: true, composed: true });
        
    }
  },

   observers:{
      'cell': function(cell){
        console.log("********************")
      }
   }


})
