
class Judger{
  cellArray
  codeSet
  codeArray 
  constructor(cellArray,codeArray){
    this.cellArray = cellArray;
    this.codeArray = codeArray;
    this.codeSet = new Set(codeArray)
  }
  getkeys(code){
     console.log("getkeys")
     console.log(code)
     console.log("cellarray")
     console.log(this.cellArray)
  }
  refreshStatus(choosenCode){
    let choosenRow = this.choosenRow(choosenCode);
    let choosenSet = new Set(choosenRow);
    let a = this.codeArray
    let difference= a.filter(x=>!choosenRow.includes(x.toString()))

    console.log("-----------------")
    console.log(this.codeArray)
    console.log(choosenRow)
    console.log("difference")
    console.log(difference)
  }
  
  choosenRow(choosenCode){
    let rowArray = []
    console.log("choosenCode")
    console.log(choosenCode)
    for(let index in choosenCode){
      rowArray.push(choosenCode[index].split("#")[0]);
      console.log(rowArray)
    }
    console.log("rowArray")
    console.log(rowArray)
    return rowArray
  }


}

export{
  Judger
}
