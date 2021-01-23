import {Http} from "../utils/http";
import {Paging} from "../utils/Paging";

class SpuPaging{
  static async getLatest(){
    return new Paging({
      url: `v1/spu/latest`
    },5)
  }
}

export {
  SpuPaging
}