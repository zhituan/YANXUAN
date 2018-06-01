/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './homeData.json'
import seconedData from './seconedData'
import datanav from './datanav'
import homeData1 from './homeData1'

Mock.mock('/home_tagList',{code:0, data:data.tagList})
Mock.mock('/home_newItemList',{code:0, data:data.newItemList})
Mock.mock('/home_popularItemList',{code:0, data:data.popularItemList})
Mock.mock('/home_topicList',{code:0,data:data.topicList})
Mock.mock('/home_cateList',{code:0,data:data.cateList})
Mock.mock('/home_focusList',{code:0,data:data.focusList})
Mock.mock('/googs_column',{code:0,data:seconedData.column})
Mock.mock('/googs_recommends',{code:0 ,data:seconedData.recommends})
Mock.mock('/googs_tenfifteen',{code:0 ,data:seconedData.tenfifteen})
Mock.mock('/googs_zhenPins',{code:0 ,data:seconedData.zhenPins})
Mock.mock('/googs_yxLook',{code:0 ,data:seconedData.yxLook})
Mock.mock('/googs_findMore',{code:0,data:seconedData.findMore})
Mock.mock('/googs_banner',{code:0,data:seconedData.banner})
// 分类左侧列表
Mock.mock('/classify_navList',{code:0,data:datanav.categoryL1List})

Mock.mock('/home_homeNav',{code:0,data:homeData1})
