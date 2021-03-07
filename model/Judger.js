import {combination} from "../utils/util"

class Judger{
  cellArray
  codeSet
  codeArray 
  constructor(cellArray,codeArray){
    let tempArray = new Array();
    for(let array of cellArray){
      tempArray.push(array.dataArray)
    }
    this.cellArray = tempArray;
    this.codeArray = codeArray;
    this.codeSet = new Set(codeArray);
  }

  getkeys(code){
     //console.log("getkeys")
     //console.log(code)
     
  }

  refreshStatus(choosenCode){
    let choosenRow = this.choosenRow(choosenCode);
    let choosenSet = new Set(choosenRow);
    let a = this.codeArray
    let RowNotChoosen= a.filter(x=>!choosenRow.includes(x.toString()))

    //循环判断状态,每个元素和其他行已经选中元素作为备选
    for(let cellRow of this.cellArray){       
        for(let cell of cellRow){
          //选出其它行已选中元素
           //console.log(choosenCode)
           let otherRowChoosen = choosenCode.filter(x=>x.split("#")[0] != cell.code.split("#")[0])
           //console.log("--------------")
           //console.log(otherRowChoosen);
           //console.log(cell.code)
          //成为潜在可能选项
          let potentialChoose = otherRowChoosen
          potentialChoose.push(cell.code.toString());
           
           console.log(potentialChoose);
          //进行组合
          let combinationResult = this.combinationFunction(potentialChoose);
          //console.log("------");
          //console.log(combinationResult);

          //判断cell状态

        }
    }

  }
  
  combinationFunction(arr){
    let result = new Array()
    for(let i=1; i <=arr.length; i++){
      let temp = combination(arr,i);
      console.log("temp")
      console.log(temp)
      result.concat(temp)
    }
    console.log("result")
    console.log(result)
    return result;
  }

  choosenRow(choosenCode){
    let rowArray = []
   // console.log("choosenCode")
    //console.log(choosenCode)
    for(let index in choosenCode){
      rowArray.push(choosenCode[index].split("#")[0]);
      //console.log(rowArray)
    }
    //console.log("rowArray")
    //console.log(rowArray)
    return rowArray
  }


}

export{
  Judger
}
