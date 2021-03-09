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

  refreshStatus(choosenCode, skucode){
    let choosenRow = this.choosenRow(choosenCode);
    let choosenSet = new Set(choosenRow);
    let a = this.codeArray
    let RowNotChoosen= a.filter(x=>!choosenRow.includes(x.toString()))
    let PotentialSet = new Set();
    let PotentialArray = new Array();
    //循环判断状态,每个元素和其他行已经选中元素作为备选
    for(let cellRow of this.cellArray){       
        for(let cell of cellRow){
          //选出其它行已选中元素
           //console.log(choosenCode)
           let otherRowChoosen = choosenCode.filter(x=>x.split("-")[0] != cell.code.split("-")[0])
           
           //console.log(otherRowChoosen);
           //console.log(cell.code)
          //成为潜在可能选项
          let potentialChoose = otherRowChoosen;
          potentialChoose.push(cell.code.toString());
           //console.log("--------------")
           //console.log(potentialChoose);
          //进行组合
          let combinationResult = this.combinationFunction(potentialChoose);          
          PotentialArray = PotentialArray.concat(combinationResult)
     
          //PotentialSet = new Set(combinationResultSet,PotentialSet);
          
        }
        
    }
    //需要判断是否可以成为路径？

    //console.log("--------------")
    //console.log(PotentialArray);
    PotentialSet = new Set(PotentialArray)
    console.log("PotentialSet------");
    console.log(PotentialSet);
    //判断cell状态
    console.log("skucode------");
    console.log(skucode);
    this.judeSkucodePath(PotentialSet, skucode.codeDict,choosenCode);
  }
  
  //判断路径是否在潜在路径中
  judeSkucodePath(PotentialSet, codeDict,choosenCode){
    let NotInthePath = [];
    let NotInthePathSet ;
      for(let x of PotentialSet){
        if(codeDict.includes(x)){
          console.log(x + " in the path");
        }else{
          console.log(x + " Not in the path");
          let tempArray = x.split("#");
          if(tempArray.length>1){
              let arr = tempArray.filter(code => !choosenCode.includes(code));
              NotInthePath = NotInthePath.concat(arr);
          }else{
            NotInthePath = NotInthePath.concat(x)
          }
        }
      }
      NotInthePathSet = new Set(NotInthePath);
      console.log("cell Not in the path")
      console.log(NotInthePathSet);
      return NotInthePathSet;
  }

  combinationFunction(arr){
    let result = new Array()
    for(let i=1; i <=arr.length; i++){
      let temp = combination(arr,i);
      let tempend=[]
      for(let j=0; j<temp.length; j++){
        let tempStr = this.joinCode(temp[j]);
        tempend = tempend.concat(tempStr);
      }
      //console.log("tempend")
      //console.log(tempend)
      

      //组装成code#连接代码
      result = result.concat(tempend);
    }
    //console.log("result")
    //console.log(result)
    return result;
  }

  joinCode(codeArray){
    if(codeArray.length==1){
      return codeArray[0]
    }
    if(codeArray.length>1){
      let sortArray = codeArray.sort();
      let codeString = sortArray.join("#")
      return codeString
    }
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
