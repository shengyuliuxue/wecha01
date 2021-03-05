
class Judger{
  cellArray
  codeSet
  constructor(cellArray,codeArray){
    this.cellArray = cellArray;
    this.codeSet = new Set(codeArray);
  }
  getkeys(code){
     console.log("getkeys")
     console.log(code)
  }

  refreshStatus(){
    console.log("codeSet")
    console.log(this.codeSet)
  }

  
}

export{
  Judger
}
