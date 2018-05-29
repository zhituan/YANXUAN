import {
  GET_TAGLIST,
  GET_NEWITEMLIST,
  GET_POPULARITEMLIST
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
  }
}
