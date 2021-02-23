import {CellStatus} from "../core/enum"

class Cell{
  status 
  title 
  constructor(title){
     this.title = title
     this.status = CellStatus.WAITING
  }
}

export{
  Cell
}

//Cell 