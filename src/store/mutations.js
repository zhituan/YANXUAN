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
}from './mutation-types'

export default {
  [GET_TAGLIST](state,{tagList}) {
    state.tagList = tagList
  },
  [GET_NEWITEMLIST](state,{newItemList}) {
    state.newItemList = newItemList
  },
  //人气推荐
  [GET_POPULARITEMLIST](state ,{popularItemList}){
    state.popularItemList = popularItemList
  },
//  专题精选
  [GET_TOPICLIST](state , {topicList}) {
    state.topicList = topicList
  },
//  好物推荐
  [GET_CATELIST](state , {cateList}){
    state.cateList = cateList
  },
  //轮播图
  [GET_FOCUSLIST](state ,{focusList}){
    state.focusList = focusList
  },
  //严选推荐
  [GET_COLUMN](state , {column}) {
    state.column = column
  },
  //为你推荐
  [GET_RECOMMENDS](state , {recommends}) {
    state.recommends =recommends
  },
  //十点一刻
  [GET_TENFIFTEEN](state , {tenfifteen}) {
    state.tenfifteen =tenfifteen
  },
  [GET_ZHENPINS](state ,{zhenPins}) {
    state.zhenPins = zhenPins
  },
  [GET_YXLOOK](state,{yxLook}) {
    state.yxLook = yxLook
  },
  [GET_FINDMORE](state,{findMore}) {
    state.findMore = findMore
  },
  [GET_BANNER](state ,{banner}) {
    state.banner = banner
  }
}
