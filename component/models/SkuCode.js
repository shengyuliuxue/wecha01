import {combination} from "../../utils/util"

class SkuCode{
  skuList
  codeArray 
  codeDict=[]
  constructor(skuList){
    this.skuList = skuList 
  }
 
  getCodeArray(){
    this.codeArray=[]
    let index 
    if(this.skuList==null){
      return
    }
    for(index in this.skuList){
        //console.log(this.skuList[index])
        let skucodes = this.skuList[index].code.split("$")
        this.codeArray.push(skucodes[1])
       // console.log("codeArray")
       // console.log(this.codeArray)
    }
  }

  _initCodePathDict(){
    let resultArray=[]
    let tempArray=[]
    this.getCodeArray()
    if(this.codeArray.length==0){
      return
    }
    let num = this.codeArray.length
    for(let i=0; i<num; i++){
        let codearrays = this.codeArray[i].split("#")
        //console.log("codearrays")
        //console.log(codearrays)
        for(let j=1; j<=codearrays.length; j++){
          let result = combination(codearrays, j)
          result = result.map((item)=>{
               return item.join("#")
          })
          tempArray = tempArray.concat(result)
          //console.log("resultArray.....")
          //console.log(tempArray)
        }        
    }
    //console.log("codeDict")
    //console.log(this.codeDict)
  }
   
}

export{
  SkuCode
}