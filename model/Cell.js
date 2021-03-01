import {CellStatus} from "../core/enum"

class Cell{
  status 
  title 
  code 
  constructor(title,code){
     this.title = title
     this.code = code 
     this.status = CellStatus.WAITING
  }
}

export{
  Cell
}

//Cell 