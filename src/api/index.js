/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
// const BASE_URL = 'http://localhost:4000'
export const reqTagList = () => ajax('/home_tagList')
export const reqhoneNav = () => ajax('/home_tagList')
//新品首发
export const reqNewItemList = () => ajax('/home_newItemList')
//人气推荐
export const reqPopularItemList = () => ajax('/home_popularItemList')
//专题精选
export const reqTopicList = () => ajax('/home_topicList')
//居家好物栏一下
export const reqCateList = () => ajax('/home_cateList')
//首页轮播
export const reqFocusList = () => ajax('/home_focusList')
//识物页面严选推荐
export const reqColumn = () => ajax('/googs_column')
//为你推荐
export const reqRecommends = () => ajax('/googs_recommends')
//十点一刻
export const reqTenfifteen = () => ajax('/googs_tenfifteen')
//甄品
export const reqZhenPins = () => ajax('/googs_zhenPins')
//严选look
export const reqYxLook = () => ajax('/googs_yxLook')
//更多精彩
export const reqFindMore = () => ajax('/googs_findMore')
//识物轮播
export const reqBanner = () => ajax('/googs_banner')
//分类左侧列表
export const reqNavList = () => ajax('/classify_navList')
//分类右侧内容
export const reqSubCateList = () => ajax('/classify_subCateList')
//首页导航
export const reqHomeNav = () => ajax('/home_homeNav')
