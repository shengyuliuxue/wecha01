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
     
     if (event.currentTarget.dataset.status === "waiting"){
       
       //this.cell.status = CellStatus.SELECTED
       this.setData({
          outerclass:"s-outer",
          innerclass:"s-inner",
          cell: { 
            title: event.currentTarget.dataset.title,
            status: CellStatus.SELECTED
          }
       })
      
     }
     if (event.currentTarget.dataset.status === "selected"){
      //this.cell.status = CellStatus.WAITING
      this.setData({
         outerclass:"",
         innerclass:"",
         cell: { 
          title: event.currentTarget.dataset.title,
          status: CellStatus.WAITING
        }
      })
     
    }

    }
  },

   observers:{
      'cell': function(cell){
        console.log(cell)
      }
   }


})
