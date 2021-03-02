class SkuPending{
  pending = []
  constructor(){
     
  }

  insertCell(code){
    let incode = this.pending.concat(code)
    let codeSet = new Set(incode)
    this.pending = Array.from(codeSet)
  }

  deletecell(code){
   let allcode = this.pending;
   let codeSet = new Set(allcode)
   codeSet.delete(code);
   this.pending= Array.from(codeSet);
  }
}

export{
  SkuPending
}