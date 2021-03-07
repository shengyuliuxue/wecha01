
class Judger{
  cellArray
  codeSet
  codeArray 
  constructor(cellArray,codeArray){
    let tempArray = new Array();
    for(let array of cellArray){
      console.log("----------")
      console.log(array.dataArray)
      tempArray.push(array.dataArray)
    }
    console.log("tempArray")
    console.log(tempArray);
    this.codeArray = codeArray;
    this.codeSet = new Set(codeArray);
    console.log("cellarray")
    console.log(cellArray)
  }

  getkeys(code){
     console.log("getkeys")
     console.log(code)
     
  }

  refreshStatus(choosenCode){
    let choosenRow = this.choosenRow(choosenCode);
    let choosenSet = new Set(choosenRow);
    let a = this.codeArray
    let RowNotChoosen= a.filter(x=>!choosenRow.includes(x.toString()))

    // console.log("-----------------")
    // console.log(this.codeArray)
    // console.log(choosenRow)
    // console.log("RowNotChoosen")
    // console.log(RowNotChoosen)

    //循环判断状态
    // for(let cell of this.cellArray){
    //     console.log(cell)
    // }

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
