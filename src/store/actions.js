import {
  reqTagList,
  reqNewItemList,
  reqPopularItemList
} from '../api/index'

import {
  GET_TAGLIST,
  GET_NEWITEMLIST,
  GET_POPULARITEMLIST
} from './mutation-types'
export default {
  //获取品牌直供数据
  async getTagList ({commit}){
    const result = await reqTagList()
    if(result.code === 0){
      const tagList = result.data
      commit(GET_TAGLIST,{tagList})
    }
  },

//  获取新品首发数据
  async getnewItemList ({commit}){
    const result = await reqNewItemList()
    if(result.code === 0){
      const newItemList = result.data
      commit(GET_NEWITEMLIST,{newItemList})
    }
  },
//  人气推荐
  async getPopularItemList ({commit}){
    const result = await reqPopularItemList()
    if(result.code === 0){
      const popularItemList = result.data
      commit(GET_POPULARITEMLIST,{popularItemList})
    }
  },
}

