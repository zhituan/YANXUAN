import {
  reqTagList,
  reqNewItemList,
  reqPopularItemList,
  reqTopicList,
  reqCateList,
  reqFocusList,
  reqColumn,
  reqRecommends,
  reqTenfifteen,
  reqZhenPins,
  reqYxLook,
  reqFindMore,
  reqBanner
} from '../api/index'

import {
  GET_TAGLIST,
  GET_NEWITEMLIST,
  GET_POPULARITEMLIST,
  GET_TOPICLIST,
  GET_CATELIST,
  GET_FOCUSLIST,
  GET_COLUMN,
  GET_RECOMMENDS,
  GET_TENFIFTEEN,
  GET_ZHENPINS,
  GET_YXLOOK,
  GET_FINDMORE,
  GET_BANNER
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
  async getnewItemList ({commit} , callback){
    const result = await reqNewItemList()
    if(result.code === 0){
      const newItemList = result.data
      commit(GET_NEWITEMLIST,{newItemList})
      callback && callback()
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
  //专题精选
  async getTopicList ({commit},callback){
    const result = await reqTopicList()
    if(result.code === 0){
      const topicList = result.data
      commit(GET_TOPICLIST,{topicList})
      callback && callback()
    }
  },
  //好物推荐
  async getCateList ({commit}){
    const result = await reqCateList()
    if(result.code === 0){
      const cateList = result.data
      commit(GET_CATELIST,{cateList})
    }
  },
  async getFocusList ({commit}){
    const result = await reqFocusList()
    if(result.code === 0){
      const focusList = result.data
      commit(GET_FOCUSLIST,{focusList})
    }
  },
  //识物页面严选推荐
  async getColumn ({commit} ,callback){
  const result = await reqColumn()
  if(result.code === 0){
    const column = result.data
    commit(GET_COLUMN,{column})
    callback && callback()
  }
},
  //为你推荐
  async getRecommends ({commit} ,callback){
    const result = await reqRecommends()
    if(result.code === 0){
      const recommends = result.data
      commit(GET_RECOMMENDS,{recommends})
      callback && callback()
    }
  },
  //十点一刻
  async getTenfifteen ({commit} ,callback){
    const result = await reqTenfifteen()
    if(result.code === 0){
      const tenfifteen = result.data
      commit(GET_TENFIFTEEN,{tenfifteen})
      callback && callback()
    }
  },
  async getZhenPins({commit} ,callback){
    const result = await reqZhenPins()
    if(result.code === 0){
      const zhenPins = result.data
      commit(GET_ZHENPINS,{zhenPins})
      callback && callback()
    }
  },
  //look
  async getYxLook({commit} ,callback){
    const result = await reqYxLook()
    if(result.code === 0){
      const yxLook = result.data
      commit(GET_YXLOOK,{yxLook})
      callback && callback()
    }
  },
  async getFindMore({commit} ,callback){
    const result = await reqFindMore()
    if(result.code === 0){
      const findMore = result.data
      commit(GET_FINDMORE,{findMore})
      callback && callback()
    }
  },
  async getBanner({commit} ,callback){
    const result = await reqBanner()
    if(result.code === 0){
      const banner = result.data
      commit(GET_BANNER,{banner})
      callback && callback()
    }
  }
}

