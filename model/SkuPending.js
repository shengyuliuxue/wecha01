class SkuPending{
  pending = []
  constructor(){
     
  }

  insertCell(code){
    if(this.isSelect(code)){
      this.deletecell(this.isSelect(code)[0]);
    }
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

  isSelect(code){
    let selected = this.pending.filter( x => code.split("-")[0] == x.split("-")[0]);
    if(selected.length >= 1){
      return selected;
    }
    return false;
  }

}

export{
  SkuPending
}